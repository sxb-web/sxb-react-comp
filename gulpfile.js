const { src, dest, series, parallel } = require("gulp")
const babel = require("gulp-babel")
const sass = require("gulp-sass")
const through2 = require('through2')
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')

const config = {
  lib: {
    dir: 'lib',
    env: ''
  },
  es: {
    dir: 'es',
    env: 'es'
  }
}

// 编译js handle
function compilerScript(babelEnv, dir) {
  process.env.BABEL_ENV = babelEnv
  return src(['packages/**/*.js', '!packages/**/test/*.js',  '!packages/**/demo/*.js'])
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        // 找到目标
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content)); // 处理文件内容
          file.path = file.path.replace(/index\.js/, 'css.js'); // 文件重命名
          this.push(file); // 新增该文件
          next();
        } else {
          next();
        }
      }),
    )
    .pipe(babel())
    .pipe(dest(dir))
}

// 编译 commonJs
function compilerCjs() {
  return compilerScript(config.lib.env, config.lib.dir)
}

// 编译 es Module
function compilerEs() {
  return compilerScript(config.es.env, config.es.dir)
}

/**
 * 当前组件样式 import './index.less' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/style/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 * @param {string} content
 */
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, '.css');
}


// 复制sass 保证 style 里面含有 原始的index.scss 和 index.js

function copySass() {
  return src("packages/**/*.scss").pipe(dest('lib')).pipe(dest('es'))
}

// 编译sass
function buildSass() {
  return src("packages/**/*.scss")
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(dest('lib'))
    .pipe(dest('es'))
}

const buildScript = series(compilerCjs, compilerEs)
const build = series(buildScript, copySass, buildSass)

exports.build = build
exports.default = build