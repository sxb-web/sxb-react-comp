# VirtualKeyboard 虚拟键盘

虚拟数字键盘，可以配合密码输入框组件或自定义的输入框组件使用。

## 引入

```js
import { VirtualKeyboard } from 'sxb-react-comp'

// or

import VirtualKeyboard from 'sxb-react-comp/lib/virtual-keyboard'
import 'sxb-react-comp/lib/virtual-keyboard/style'

```

## 代码演示

### 基础演示

通过 type 值来指定 键盘的类型，目前支持 number digit idCard 三种类型。

```js
import React  from 'react'
import VirtualKeyboard from "./index"
import './style'

export default function Page() {
  function onInput(e) {
    console.log('input', e)
  }

  function onDelete() {
    console.log('onDelete')
  }

  function onConfirm() {
    console.log('confirm')
  }
  function onHide() {
    console.log('onHide')
  }

  return (
    <div className="demo-page">
      <div className="demo-page-title">基础演示</div>
      <VirtualKeyboard type="number" onInput={onInput} onHide={onHide} onConfirm={onConfirm} onDelete={onDelete} />
    </div>
  )
}


```

### 受控组件

通过 control 和 value


## API

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onConfirm | confirm 回调 | (value)=> {} |
| onHide | 隐藏回调 | (value)=> {} |
| onChange | change 回调 | (value)=> {} |
| onInput | input 回调 | (value)=> {} |