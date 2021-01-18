# Picker 选择器
提供多个选项集合供用户选择，支持单列选择和 暂不支持多列级联。

## 引入

```js
import { Picker } from 'sxb-react-comp'

// or

import Picker from 'sxb-react-comp/lib/picker'
import 'sxb-react-comp/lib/picker/style'

```

## 代码演示

### 基础用法
Picker 组件通过 columns 属性配置选项数据，columns 是一个包含字符串或对象的数组。

```js

<Picker
   show={show}
   columns={list}
   close={() => setShow(false)}
   onCancel={() => console.log('cancel')}
   onConfirm={(value, index) => console.log('confirm:', value, index)}
   onChange={(value, index) => console.log('onChange:', value, index)}
/>

```

### 默认选中项

单列选择时，可以通过 defaultActive 属性设置初始选中项的索引。

### 禁用选项

通过配置 columns 配置 `[{text: '背景', disabled: true, value: 1}]`


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 控制展示或者关闭 | _boolean_ | `false` |
| defaultActive | 初始化index。 | _number_ | `0` |
| columns | 列表 | _string_ | `[]` |
| title | 弹窗标题 | _string_ | `` |
| confirmText | 确认按钮文字 | _string_ | `确定` |
| cancelText | 取消按钮文字 | _string_ | `取消` |


### Events
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭弹窗回调 |  |
| onConfirm | confirm 回调 | (value, index)=> {} |
| onCancel | cancel 回调 | ()=> {} |
| onChange | change 回调 | (value, index)=> {} |
