# Sticky 粘性布局

Sticky 组件与 CSS 中position: sticky属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

## 引入

```js
import { sticky } from 'sxb-react-comp'
// or
import Sticky from "sxb-react-comp/lib/sticky"
import 'sxb-react-comp/lib/sticky/style/css'
```

## 代码演示

### 基础演示

将内容包裹在 Sticky 组件内即可
```js
<Sticky>
   <Button type="primary">基础用法</Button>
</Sticky>       
```

### 吸顶距离
通过 offset 属性可以设置组件在吸顶时与顶部的距离。

```js
<Sticky offset="50px">
   <Button type="primary">吸顶距离</Button>
</Sticky>       
```

### 指定容器
通过 container 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。

```jsx harmony

import React from 'react'

export default function Page() {
  const [container, setContainer] = React.useState(null)

  React.useEffect(() => {
    setContainer(document.getElementById('container'))
  }, [])

  return (
    <div id="container">
      <Sticky container={container}>
         <Button type="danger">指定容器</Button>
      </Sticky>         
    </div>
  )    
}

```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否开启吸顶 | _boolean_ | `false` |
| offset | 吸顶距离 | _string_ | `0px` |
| zIndex | 吸顶后的层级 | _string_ | `99` |
| container | 容器对应的 HTML 节点 | _Element_ | `—` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |

