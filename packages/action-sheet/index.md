# ActionSheet 动作面板
底部弹起的模态面板，包含与当前情境相关的多个选项。

## 引入

```js
import { ActionSheet } from 'sxb-react-comp'

// or

import ActionSheet from 'sxb-react-comp/lib/action-sheet'
import 'sxb-react-comp/lib/action-sheet/style/css'

```

## 演示

### 基础演示

动作面板通过 actions 属性来定义选项，actions 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。

```jsx harmony

import React from 'react'
import ActionSheet from "./index"
import './style'
import Cell from '../cell'
import '../cell/style'
import { useMyReducer } from "../utils/hooks"

export default function Page() {

  const [state, dispatch] = useMyReducer({
    showOne: false,
    actionsOne: [{name: '选项一', value: '0'}, {name: '选项二', value: '1'}, {name: '选项一', value: '2'}],
    actionsTwo: [{name: '选项一', subname: '我是描述', value: '0'}, {name: '选项二', subname: '我是描述', value: '1'}, {name: '选项一', subname: '我是描述', value: '2'}],
    actionsThree: [{name: '着色选项', subname: '我是描述', color: 'red'}, {name: '选项二', subname: '我是描述', disabled: true}, {name: '选项一', subname: '我是描述', loading: true}],
    actionsFour: [{title: 'title', desc: '描述'}],
    showTwo: false,
    showThree: false,
    showFour: false,
    showFive: false,
  })

  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <div className="demo-page-cnt">
        <Cell title="基础用法" link onClick={() => {dispatch({showOne: true})}} />
        <Cell title="展示标题" link onClick={() => {dispatch({showTwo: true})}} />
        <Cell title="展示描述基础用法" link onClick={() => {dispatch({showThree: true})}} />
        <Cell title="指定键名" link onClick={() => {dispatch({showFive: true})}} />
      </div>
      <div className="demo-page-title">选项状态</div>
      <div className="demo-page-cnt">
        <Cell title="选项状态" link onClick={() => {dispatch({showFour: true})}} />
      </div>
      <ActionSheet show={state.showOne} actions={state.actionsOne} close={() => {dispatch({showOne: false})}} onClick={ e => console.log(e)} />
      <ActionSheet show={state.showTwo} title="我是标题" closeable actions={state.actionsOne} close={() => {dispatch({showTwo: false})}}  />
      <ActionSheet show={state.showThree} title="我是标题" description="我是标题描述" closeable actions={state.actionsTwo} close={() => {dispatch({showThree: false})}}  />
      <ActionSheet show={state.showFour} title="我是标题" description="我是标题描述" closeable actions={state.actionsThree} close={() => {dispatch({showFour: false})}}  />
      <ActionSheet show={state.showFive} nameKey="title" subnameKey="desc" actions={state.actionsFour} close={() => {dispatch({showFive: false})}} />
    </div>
  )
}

```

## Api

### Action 数据结构

actions 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| name | 标题键名，可以通过nameKey 指定 | _string_ |
| subname | 二级标题键名，可以通过subnameKey 指定 | _string_ |
| color | 选项文字颜色 | _string_ |
| loading | 是否为加载状态 | _boolean_ |
| disabled | 是否为禁用状态 | _boolean_ |

### props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 激活项 | _boolean_ | false |
| actions | 数组 | _array_ | [] |
| title | 顶部标题 | _string_ |  |
| description | 选项上方的描述信息 | _string_ |  |
| nameKey | 指定item name 的 键名 | _string_ | name |
| subnameKey | 指定item subname 的 键名 | _string_ | subname |
| cancelText | 取消按钮文字 | _string_ | 取消 |
| closeable  | 是否显示关闭图标 | _boolean_ | false |

### events

| functions | 说明 | 
| --- | --- |
| close | 关闭事件 |
| onClick | 点击事件 {...item, index}} |
| cancel | 点击取消按钮事件 |