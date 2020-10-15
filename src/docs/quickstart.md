# 快速上手

### 通过 npm 安装

```bash
# 通过 npm 安装
npm i DawnUI -S

## 引入组件

### 方式一. 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 在.babelrc 中添加配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "DawnUI",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'DawnUI',
      libraryDirectory: 'es',
      style: true
    }, 'DawnUI']
  ]
};
```

```js
// 接着你可以在代码中直接引入 DawnUI 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from 'DawnUI';
```

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'DawnUI/lib/button';
import 'DawnUI/lib/button/style';
```

### 方式三. DawnUI 也可以支持Tree Shaking


## 进阶用法

### Rem 适配

DanUI 中的样式默认使用`px`作为单位，如果需要使用`rem`单位，推荐使用以下两个工具：

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

#### PostCSS 配置

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

```js
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

> 在配置 postcss-loader 时，应避免 ignore node_modules 目录，否则将导致 DawnUI 样式无法被编译
