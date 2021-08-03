# Layout 布局

Layout 提供了 Row 和 Col 两个组件来进行行列布局。

## 引入

```js

import { Row, Col } from 'sxb-react-comp'

```

## 代码演示

### 基础用法

Layout 组件提供了 24列栅格，通过在 Col 上添加 span 属性设置列所占的宽度百分比。此外，添加 offset 属性可以设置列的偏移宽度，计算方式与 span 相同

```jsx harmony

<Row>
   <Col span="8">span="8"</Col>
   <Col span="8">span="8"</Col>
   <Col span="8">span="8"</Col>
</Row>

```

### 设置列元素间距
通过 gutter 属性可以设置列元素之间的间距，默认间距为 0。

```jsx harmony

<Row gutter="20">
   <Col span="8">span="8"</Col>
   <Col span="8">span="8"</Col>
   <Col span="8">span="8"</Col>
</Row>

```
### Flex 布局

默认使用flex 布局，便于灵活的排列和对其， align 属性 和 justify 分别对应 flex 属性的 align-items 和 justify-content

```jsx harmony
// 左对齐
<Row>
   <Col span="6">span="6"</Col>
   <Col span="6">span="6"</Col>
   <Col span="6">span="6"</Col>
</Row>
// 居中
<Row justify="center">
   <Col span="6">span="6"</Col>
   <Col span="6">span="6"</Col>
   <Col span="6">span="6"</Col>
</Row>
// 右对齐
<Row justify="flex-end">
   <Col span="6">span="6"</Col>
   <Col span="6">span="6"</Col>
   <Col span="6">span="6"</Col>
</Row>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列元素之间的间距（单位为 px） | _string_ | - |
| justify | Flex 主轴对齐方式，可选值为 end center
            space-around space-between | _string_ | `start` |
| align | Flex 交叉轴对齐方式，可选值为 center bottom | _string_ | `start` |

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 列元素宽度 | _string_ | - |
| offset | 列元素偏移距离 | _string_ | - |