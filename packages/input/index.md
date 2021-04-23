# Input 输入框

单行文本输入框，支持特殊场景文本格式化

## 引入

```js

import { Input } from 'sxb-react-comp'

```
## 代码演示
### 基本使用

通过type 值指定 input 类型，除了标准的 input 类型 ，我们还增加了 idCard，bankCard, digit, phone 等类型

```js
// 输入纯文本
<Input type="text" required name="text" value={state.text} onChange={inputChange} label="普通文本"  clearable maxLength="5" placeholder="随便说点儿什么"  />
// 身份证
<Input type="idCard" name="idCard" value={state.idCard} onChange={inputChange} clearable label="身份证" placeholder="18位身份证"  />
// 银行卡
<Input type="bankCard" name="bankCard" value={state.bankCard} onChange={inputChange} clearable label="银行卡" placeholder="请输入银行卡"  />
// 手机号
<Input type="phone" name="phone" value={state.phone} onChange={inputChange} clearable label="手机号" placeholder="随便说点儿什么"  />
// 纯数字
<Input type="number" maxLength={4} name="number" value={state.number} onChange={inputChange} clearable label="验证码" placeholder="请输入四位验证码" />
// 带小数的 金额
<Input type="digit" maxLength={4} name="digit" value={state.digit} onChange={inputChange} clearable label="带小数" placeholder="随便说点儿什么"  />
// 密码框
<Input type="password" name="password" value={state.password} onChange={inputChange} clearable label="密码" placeholder="随便说点儿什么"  />
// 只读属性
<Input type="text" value="111222" clearable readOnly label="readOnly" placeholder="随便说点儿什么"  />
// 禁用
<Input type="text" value="1112223" clearable disabled label="disabled" placeholder="随便说点儿什么"  />
```

### 清除按钮
通过 clearable 开启 清除

### 必填项
通过 required 开启

### 格式化
通过 开启 isFormat 开启格式化。只有当type 为 idCard bankCard digit phone 生效

### 输入框内容对齐
通过 align 属性可以设置输入框内容的对齐方式，可选值为 center、right、left。
### 金融数字

type digit 特殊处理 处理金额数字，默认支持小数点后两位，可以通过 decimal 决定小数点后几位。
通过maxLength 控制小数点前几位。

### 插槽

通过props children 来在input 框后面增加内容


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | input 值 | _string_ | `` |
| label | 输入框左侧文本 | _string_ | `` |
| name  | 名称，提交表单的标识符 | _string_ | `` |
| type | 输入框类型, 可选值为 phone idCard bankCard digit number password 等 | _string_ | `text` |
| required | 是否必填，会增加小红点 | _boolean_ | `false` |
| border | 是否显示底部边框 | _boolean_ | `true` |
| decimal | 小数点后几位 | _number_ | `2` |
| placeholder | 输入框占位提示文字 | _string_ | `` |
| maxLength | 输入的最大字符数 | _number_ | `999` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readOnly | 是否只读 | _boolean_ | `false` |
| clearable | 是否显示清除按钮 | _boolean_ | `false` |
| align | input文字位置 | _string_ | `left` |
| labelWidth | label 宽度 | _number_ | `80` |
| mask | 添加遮罩 | _boolean_ | `false` |


### Events
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 输入框内容变化时触发 | e => {name, value} |
