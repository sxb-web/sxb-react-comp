# Dialog

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

## 组件调用

通过组件调用 可以更加灵活配置，通过组件children 配置展示内容

### 使用

```jsx harmony
import React, {useState} from 'react'
import Dialog from "../index"

export default function Page() {

  const [show, setShow] = useState(false)

  return (
    <div className="demo-page">
      <div className="demo-page-title">组件调用</div>
      <div className="demo-page-cnt">
        <Button type="primary" onClick={() => setShow(true)}>点我唤醒</Button>
        <Dialog show={show} title="喜欢吗" cancelText="不喜欢" confirmText="喜欢" close={() => setShow(false)}>
          <img style={{display: 'block', width: '100%'}} src="https://sxbkj-test.oss-cn-hangzhou.aliyuncs.com/carmasterSaas/goodsManage/2020-06-18/And-024F03B8CE1048A4846391287CF1CE0A-1592471005097.jpg" />
        </Dialog>
      </div>
    </div>
  )
}

```

## 函数式调用

通常作为事件回调的提示操作，但是功能受限，仅仅提供 一些基本功能，通过Promise.then 和 Promise.catch 触发相应的回调

### Alert

```jsx harmony

import { Dialog } from 'sxb-react-comp'

Dialog.alert({
  title: '提示',
  content: '该订单不可操作',
  confirmText: '好的'
}).then(() => {})

```

### Confirm

```jsx harmony

import { Dialog } from 'sxb-react-comp'

Dialog.confirm({
  title: '提示',
  content: '确认删除？',
  confirmText: '狠心删除',
  cancelText: '我在先想想'
}).then(() => {}).catch(() => {})

```

## Api

### Props
这里是当Dialog 作为组件调用的 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 名称 | _string_ | '' |
| content | 内容 | _string_ | '' |
| isShowCancel | 是否展示cancel按钮 | _boolean_ | `true` |
| confirmText | confirm 文案 | _string_ | `确定` |
| cancelText | cancel 文案 | _string_ | `取消` |
| className | 附加样式 | _string_ |  |
| textAlign | 内容字体对齐方式 支持 left right center | _string_ | `left` |

### Events

#### close
Dialog 作为组件调用的关闭回调 一定要加，不然无法关闭
```jsx harmony
  <Dialog show={true} close={() => setShow(false)}></Dialog>
```
#### confirm
用户点击确定按钮的事件回调
#### cancel
用户点击取消按钮的事件回调


### Dialog.Alert & Dialog.confirm  Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 名称 | _string_ | '提示' |
| content | 内容 | _string_ | '' |
| confirmText | confirm 文案 | _string_ | `确定` |
| cancelText | cancel 文案 | _string_ | `取消` 






