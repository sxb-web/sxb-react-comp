import React, { useReducer } from 'react'
import Overlay from "../../overlay"
import '../../overlay/style'
import Cell from "../../cell"
import "../../cell/style"

function reducer(state, action) {
  return {...state, ...action.payload}
}

export default function Index() {
  const [state, dispatch] = useReducer(reducer, {
    show: false,
    up: false,
    down: false,
    left: false,
    free: false,
    transparent: false,
    mask: false,
  })
  return (
    <div className="demo-page">
      <div className="demo-page-title">基本用法</div>
      <div className="demo-page-cnt">
        <Cell title="淡入淡出(fade)" value="点击开启" link onClick={() => dispatch({payload: {show: true}})} />
        <Overlay show={state.show} close={() => dispatch({payload: {show: false}})}>
          <div className="section">淡入淡出</div>
        </Overlay>
        <Cell title="向下弹出(slide-down)" value="点击开启" link onClick={() => dispatch({payload: {up: true}})} />
        <Overlay show={state.up} animation="slide-down" close={() => dispatch({payload: {up: false}})}>
          <div className="section">向下弹出</div>
        </Overlay>
        <Cell title="从上弹出(slide-up)" value="点击开启" link onClick={() => dispatch({payload: {down: true}})} />
        <Overlay show={state.down} animation="slide-up" close={() => dispatch({payload: {down: false}})}>
          <div className="section">从上弹出</div>
        </Overlay>
        <Cell title="从右弹出(slide-right)" value="点击开启" link onClick={() => dispatch({payload: {left: true}})} />
        <Overlay show={state.left} animation="slide-right" close={() => dispatch({payload: {left: false}})}>
          <div className="section" style={{height: '100%'}}>从右弹出</div>
        </Overlay>
        <Cell title="从左弹出(slide-left)" value="点击开启" link onClick={() => dispatch({payload: {right: true}})} />
        <Overlay show={state.right} animation="slide-left" close={() => dispatch({payload: {right: false}})}>
          <div className="section" style={{height: '100%'}}>从左弹出</div>
        </Overlay>
        <Cell title="zoom" value="点击开启" link onClick={() => dispatch({payload: {free: true}})} />
        <Overlay show={state.free} animation="zoom" close={() => dispatch({payload: {free: false}})}>
          <div className="section">zoom效果</div>
        </Overlay>
      </div>
    </div>
  )
}