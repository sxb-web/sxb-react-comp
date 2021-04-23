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