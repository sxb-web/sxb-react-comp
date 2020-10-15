# Button 按钮
按钮组件，可配置多种不同的按钮样式


## 基本用法

```js
import React from 'react'
import { Button } from 'DawnUI'

export default function Page() {
  return (
    <Button type="primary" block>我是一个按钮</Button>
  )
}
```

## 代码演示

### 按钮类型
按钮支持 default、primary、warn、danger、niello 五种类型，默认为 default。
```js
  <Button type="primary">主要按钮</Button>
  <Button type="niello">黑金按钮</Button>
  <Button type="default">默认按钮</Button>
  <Button type="warn">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
```
### 朴素按钮
通过 plain 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。
```js
  <Button type="primary" plain>主要按钮</Button>
  <Button type="niello" plain>黑金按钮</Button>
  <Button type="default" plain>默认按钮</Button>
  <Button type="warn" plain>警告按钮</Button>
  <Button type="danger" plain>危险按钮</Button>
```
### 禁用状态
通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。
```js
  <Button type="primary" disabled>主要按钮</Button>
  <Button type="niello" disabled>黑金按钮</Button>
  <Button type="default" disabled>默认按钮</Button>
  <Button type="warn" disabled>警告按钮</Button>
  <Button type="danger" disabled>危险按钮</Button>
```
### 圆角
通过 round 设置圆形按钮。
```js
  <Button type="primary" round>主要按钮</Button>
  <Button type="niello" round>黑金按钮</Button>
  <Button type="default" round>默认按钮</Button>
  <Button type="warn" round>警告按钮</Button>
  <Button type="danger" round>危险按钮</Button>
```
### 尺寸
通过 size 设置按钮大小。支持large、normal、small、mini四种类型，默认是normal。
```js
  <Button type="primary" size="large">主要按钮</Button>
  <Button type="primary" size="normal">主要按钮</Button>
  <Button type="primary" size="small">主要按钮</Button>
  <Button type="primary" size="mini">主要按钮</Button>
```

### 块级元素
按钮在默认情况下为行内块级元素，通过 block 属性可以将按钮的元素类型设置为块级元素。
```js
  <Button type="primary" block>主要按钮</Button>
```
## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `niello` `warn` `danger` | _string_ | `default` |
| size | 尺寸，可选值为 `large` `small` `mini` | _string_ | `normal` |
| tag | 按钮根节点的 HTML 标签 | _string_ | `button` |
| block | 是否为块级元素 | _boolean_ | `false` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| square | 是否为方形按钮 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |


