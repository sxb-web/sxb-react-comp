import React, { useReducer } from 'react'
import Overlay from "../Overlay"
import '../style'
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
      {/*<input autoFocus />*/}
      <div className="demo-page-cnt">
        <Cell title="默认展示" value="点击开启" link onClick={() => dispatch({payload: {show: true}})} />
        <Overlay show={state.show} close={() => dispatch({payload: {show: false}})}>
          <div className="section">
            <div>默认展示</div>
            <Child />
          </div>
        </Overlay>
        <Cell title="顶部弹出" value="点击开启" link onClick={() => dispatch({payload: {up: true}})} />
        <Overlay show={state.up} position="top" animation="slide-down" close={() => dispatch({payload: {up: false}})}>
          <div className="section">顶部弹出</div>
        </Overlay>
        <Cell title="底部弹出" value="点击开启" link onClick={() => dispatch({payload: {down: true}})} />
        <Overlay show={state.down} position="bottom" animation="slide-up" close={() => dispatch({payload: {down: false}})}>
          <div className="section">底部弹出</div>
        </Overlay>
        <Cell title="左边弹出" value="点击开启" link onClick={() => dispatch({payload: {left: true}})} />
        <Overlay show={state.left} position="left" animation="slide-right" close={() => dispatch({payload: {left: false}})}>
          <div className="section" style={{height: '100%'}}>左边弹出</div>
        </Overlay>
        <Cell title="右边弹出" value="点击开启" link onClick={() => dispatch({payload: {right: true}})} />
        <Overlay show={state.right} position="right" animation="slide-left" close={() => dispatch({payload: {right: false}})}>
          <div className="section" style={{height: '100%'}}>右边弹出</div>
        </Overlay>
        <Cell title="自由组合" value="点击开启" link onClick={() => dispatch({payload: {free: true}})} />
        <Overlay show={state.free} animation="zoom" close={() => dispatch({payload: {free: false}})}>
          <div className="section">zoom效果</div>
        </Overlay>
        <Cell title="遮罩透明" value="点击开启" link onClick={() => dispatch({payload: {transparent: true}})} />
        <Overlay show={state.transparent} transparent={true} animation="zoom" close={() => dispatch({payload: {transparent: false}})}>
          <div className="section">背景透明</div>
        </Overlay>
        <Cell title="无遮罩模式" desc="无遮罩后面的内容会透出来" value="点击开启" link onClick={() => dispatch({payload: {mask: true}})} />
        <Overlay show={state.mask} isShowLay={false} animation="zoom" close={() => dispatch({payload: {mask: false}})}>
          <div className="section">背景透明</div>
        </Overlay>
      </div>
    </div>
  )
}

function Child() {

  React.useEffect(() => {
    setTimeout(() => {
      console.log(document.getElementById('root'))
    }, 16)
  }, [])

  return (
    <div style={{width: '100px', height: '100px', background: 'red'}} id="root">你好</div>
  )
}