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

通过 control 和 value 来实现键盘的受控制。

```js
import React, { useState }  from 'react'
import VirtualKeyboard from "./index"
import './style'

export default function Page() {

  const [value, setValue] = useState(0)

  function onInput(e) {
    setValue(e)
  }

  return (
    <div className="demo-page">
      <div className="demo-page-title">受控</div>
      <VirtualKeyboard value={value} control type="number" onInput={onInput}  />
    </div>
  )
}


```

### 控制长度 

通过 maxLength 用于限制 用户输入的最大字符串长度。其中当 type = idCard 最大长度是18。与maxLength 无关。当 type = digit 时，maxLength 表示小数点前的最大长度。默认是保留小数点后两位。如需指定其他长度的小数点后几位，可以设置 decimal 值

## 说明

由虚拟键盘 返回的值都是 string 类型。


## API

### props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | _string_ | number |
| control | 是否受控 | _boolean_ | false |
| value | 受控的value值 | _string_ |  |
| maxLength | 字符串长度 | _number_ | 999 |
| decimal | 保留小数点后几位 | _number_ | 2 |
| confirmText | 完成按钮文案 | _string_ | 完成 |
| cancelText | 取消按钮文字 | _string_ | 取消 |
| closeable  | 是否显示关闭图标 | _boolean_ | false |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onConfirm | confirm 回调 | ()=> {} |
| onHide | 隐藏回调 | ()=> {} |
| onInput | input 回调 | (value)=> {} |
| onDelete | 删除 回调 | ()=> {} |