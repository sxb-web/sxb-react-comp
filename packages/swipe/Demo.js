import React, { useRef } from 'react'
import Swipe from "./index"
import './style'
import Toast from "../toast"
import '../toast/style'

export default function Page() {

  const ref = useRef(null)

  function next() {
    ref.current.slideTo(2)
  }

  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <Swipe>
        <div style={{background: '#D6EADF', height: '100px'}}>1</div>
        <div style={{background: '#DDA789', height: '100px'}}>2</div>
        <div style={{background: '#C3D899', height: '100px'}}>3</div>
      </Swipe>
      <div className="demo-page-title">垂直滚动</div>
      <Swipe vertical height="100px">
        <div style={{background: '#D6EADF', height: '100px'}}>1</div>
        <div style={{background: '#DDA789', height: '100px'}}>2</div>
        <div style={{background: '#C3D899', height: '100px'}}>3</div>
      </Swipe>
      <div className="demo-page-title">change 事件</div>
      <Swipe autoplay={false} onChange={e => Toast(e.index)}>
        <div style={{background: '#D6EADF', height: '100px'}}>1</div>
        <div style={{background: '#DDA789', height: '100px'}}>2</div>
        <div style={{background: '#C3D899', height: '100px'}}>3</div>
      </Swipe>
      <div className="demo-page-title">自定义indicators指示器</div>
      <Swipe
        renderIndicators={index => (
          <div className="custom" style={{background: 'rgba(0, 0, 0, 0.1)', color: '#fff', lineHeight: '22px', padding: '0 6px', position: 'absolute', right: '5px', bottom: '5px'}}>
            {index + 1}/3
          </div>
        )}
      >
        <div style={{background: '#D6EADF', height: '100px'}}>1</div>
        <div style={{background: '#DDA789', height: '100px'}}>2</div>
        <div style={{background: '#C3D899', height: '100px'}}>3</div>
      </Swipe>
      <button onClick={next}>next</button>
    </div>
  )
}
