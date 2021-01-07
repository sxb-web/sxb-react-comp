# Overlay 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作

## 引入

```js
import React from 'react'
import { Overlay } from 'sxb-react-comp'
```

## 代码演示

### 基础用法

```jsx harmony
import React, {useState} from 'react'
import { Overlay } from 'sxb-react-comp'

export default function Index() {
  const [show, setShow] = useState(false)
  return (
    <Overlay show={show} close={() => setShow(false)}>
      <div className="section">默认展示</div>
    </Overlay>             
  )
}
```

### 弹出位置
通过 position 属性设置弹出位置，默认居中弹出，可以设置为 top、bottom、left、right。

```js

<Overlay show={show} position="top" />

```

### 关闭弹窗

通过 回调close 函数 控制弹窗关闭， 如果 设置closeable 为false，则点击蒙层无法关闭

### 设置动画

通过 animation 属性设置 过度动画，属性值 有 fade、slide-right、slide-left、slide-top、slide-bottom、zoom 。默认是fade

```js

<Overlay show={show} position="top" animation="fade" />

```

## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 控制overlay展示或者关闭 | _boolean_ | `false` |
| position | 内容区位置 可选值 center、top、bottom、left、right。 | _string_ | `center` |
| animation | 动画方式 详情见 `Animation` 组件 | _string_ | `fade` |
| duration | 动画时间 | _number_ | `200` |
| closeable | 点击遮罩层是否会关闭 | _boolean_ | `true` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| transparent | 遮罩是否是透明，默认是黑色半透明 | _boolean_ | `false` |
| isShowLay | 是否展示遮罩 | _boolean_ | `true` |
| rootStyle | 根样式 | _obj_ | `null` |
| container | 挂在节点 | _Dom_ | `document.body` |

### Events

close

```js
<Overlay show={show} close={() => setShow(false)} />
```
