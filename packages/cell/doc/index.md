# Cell 单元格
列表用于展现并列层级的信息内容，列表可承载功能入口、功能操作、信息展示等功能。


## 基本用法

```js
import React from 'react'
import { Cell } from 'DawnUI'

export default function Page() {
  return <Cell name="余额" value="7895452" />
}
```

## 代码演示

### 基本样式
按钮支持 default、primary、warn、danger、niello 五种类型，默认为 default。
```js
  <Cell title="交通银行(尾号3089)" value="展示摘要描述" desc="附加文案" link />
  <Cell title="交通银行(尾号3089)" desc="附加文案" link />
  <Cell title="余额" value="1,000" link />
  <Cell title="禁用按钮" desc="全部置灰，不可点击" disabled value="禁用的项目" link />
```
### 带有icon
通过 plain 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。
```js
   <Cell title="交通银行(尾号3089)" icon="http://iph.href.lu/30x30?text=招" iconSize="30px" iconType="round" value="展示摘要描述" desc="附加文案" link />
   <Cell title="余额" icon="home" value="1,000" link />
```
### 禁用状态
通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。
```js
   <Cell title="禁用按钮" desc="全部置灰，不可点击" disabled value="禁用的项目" link />
```
## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 名称 | _string_ |  |
| desc | 附加文案 | _string_ |  |
| value | 描述 | _string_ |  |
| disabled | 是否禁用 | _boolean_ | `false` |
| icon | 图标 可以是icon font 也可以是http图片 | _string_ |  |
| iconSize | 图标大小 | _string_ | `16px` |
| iconType | 图标形状，当等于round时为圆形图片 | _string_ | `square` |
| border | 是否显示底部边框 | _boolean_ | `true` |
| link | 是否显示箭头 | _boolean_ | `true` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |


