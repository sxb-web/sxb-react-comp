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

```js
import React, { useState } from 'react'
import VirtualKeyboard from "./index"
import './style'

export default function Page() {

  const [value, setValue] = useState(0)

  function onInput(e) {
    console.log('input', e)
  }

  function onChange(e) {
    console.log('change', e)
  }

  function onConfirm(e) {
    console.log('confirm', e)
  }
  function onHide(e) {
    console.log('onHide', e)
  }

  return (
    <div className="demo-page">
      <div className="demo-page-title">基础演示</div>
      <VirtualKeyboard value={value} onChange={onChange} onInput={onInput} onHide={onHide} onConfirm={onConfirm} />
    </div>
  )
}


```


## API

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onConfirm | confirm 回调 | (value)=> {} |
| onHide | 隐藏回调 | (value)=> {} |
| onChange | change 回调 | (value)=> {} |
| onInput | input 回调 | (value)=> {} |