
# ShareSheet 分享面板

## 介绍
底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

## 引入

```jsx harmony

import { shareSheet } from 'sxb-react-comp'

// or

import shareSheet from 'sxb-react-comp/lib/share-sheet'
import 'sxb-react-comp/lib/share-sheet/style/css'

```

## 代码演示

### 基础用法
分享面板通过 options 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

```jsx harmony

const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' }
]

<Cell title="显示分享面板" link onClick={() => setA(true)} />
<ShareSheet options={options} show={a} close={() => setA(false)} />

```

### 展示多行
当分享选项的数量较多时，可以将 options 定义为数组嵌套的格式，每个子数组会作为一行选项展示。
```js
const options1 = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ]
]

<Cell title="显示分享面板" link onClick={() => setB(true)} />
<ShareSheet options={options1} cancelText="取消" show={b} close={() => setB(false)} />

```

### 自定义图标
除了使用内置的几种图标外，可以直接在 icon 中传入图片 URL 来使用自定义的图标。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 控制显示 | _boolean_ | `false` |
| options | 列表 | _array_ | `[]` |
| title | 分享标题 | _string_ | `立即分享给好友` |
| description | 描述 | _string_ | `` |
| cancelText | 取消按钮，不设置不显示 | _string_ | `` |

### Events
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击options item 回调 | _function_ | `` |
| close | 关闭回调 | _function_ | `` |
