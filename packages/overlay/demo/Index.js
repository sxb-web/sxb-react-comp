import React, { useState } from 'react'
import Overlay from "../Overlay"
import '../style'
import Cell from "../../cell"
import "../../cell/style"

export default function Index() {
  const [show, setShow] = useState(false)
  return (
    <div className="demo-page">
      <div className="demo-page-title">基本用法</div>
      <div className="demo-page-cnt">
        <Cell title="默认展示" value="点击开启" link onClick={() => setShow(true)} />
        <Overlay show={show} close={() => setShow(false)}>
          我是一个好同志
        </Overlay>
      </div>
    </div>
  )
}