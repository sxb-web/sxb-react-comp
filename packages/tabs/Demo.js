import React, { useState } from 'react'
import Tabs from "../tabs"
import "../tabs/style/index"

export default function Demo() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <div style={{margin: '0 -10px'}}>
        <Tabs active={a} onChange={index => setA(index)}>
          {
            new Array([1, 2, 3, 4]).map(item => <div title={`标签${item}`} key={item}>内容{item}</div>)
          }
        </Tabs>
      </div>
      <div className="demo-page-title">滑动</div>
      <div style={{margin: '0 -10px'}}>
        <Tabs active={b} onChange={index => setB(index)}>
          <div title="标签一">内容一</div>
          <div title="标签二">内容二</div>
          <div title="标签三">内容三</div>
          <div title="标签四">内容四</div>
          <div title="标签⑤">内容五</div>
          <div title="标签刘">内容六</div>
          <div title="今日头条">内容七</div>
          <div title="车圈女">内容是哪</div>
          <div title="标签刘">内容是哪</div>
          <div title="标签刘">内容是哪</div>
        </Tabs>
      </div>
    </div>
  )
}