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