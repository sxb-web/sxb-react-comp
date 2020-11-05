# Dialog

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

## 组件调用

通过组件调用 可以更加灵活配置，通过组件children 配置展示内容

### 使用

```jsx harmony

import React, { useState } from 'react'
// import { Dialog } from 'sxb-react-comp'

function Page() {
  const [show, setShow] = useState(false)
  
}





```

## 函数式调用

通常作为事件回调的提示操作，但是功能受限，仅仅提供 title content 一些基本功能