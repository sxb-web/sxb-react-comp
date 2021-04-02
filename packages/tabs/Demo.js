import React, { useState } from 'react'
import Tabs from "../tabs"
import "../tabs/style/index"

const l = [{id: 1, name: '生鲜'}, {id: 2, name: '水鲜'}, {id: 3, name: '花鲜'}]
export default function Demo() {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  const [d, setD] = useState(0)
  const [e, setE] = useState(0)

  return (
    <div className="demo-page" style={{minHeight: '100vh', background: '#f8f8f8', paddingBottom: '1000px'}}>
      <div className="demo-page-title">基础用法</div>
      <div style={{margin: '0 -10px'}}>
        <Tabs active={a} onChange={index => setA(index)}>
          {
            new Array(4).fill('').map((item, index) => <div className="section" title={`标签${index}`} key={index}>内容{index}</div>)
          }
        </Tabs>
      </div>
      <div className="demo-page-title">滑动</div>
      <div style={{margin: '0 -10px'}}>
        <Tabs active={b} onChange={index => setB(index)}>
          {
            new Array(12).fill('').map((item, index) => <div className="section" title={`标签${index}`} key={index}>内容{index}</div>)
          }
        </Tabs>
      </div>
      <div className="demo-page-title">吸顶</div>
      <div style={{margin: '0 -10px'}}>
        <Tabs active={c} sticky onChange={index => setC(index)}>
          {
            new Array(10).fill('').map((item, index) => <div className="h-300 section" title={`标签${index}`} key={index}>内容{index}</div>)
          }
        </Tabs>
      </div>
      <div className="demo-page-title">自定义无标题</div>
      <div style={{margin: '0 -10px'}}>
        <Tabs active={d} sticky onChange={index => setD(index)}>
          {
            new Array(10).fill('').map((item, index) => <div className="h-300 section" key={index}>内容{index}</div>)
          }
        </Tabs>
      </div>
      <div className="demo-page-title">动态隐藏</div>
      <div style={{margin: '0 -10px'}}>
        <Tabs active={e} sticky onChange={index => setE(index)}>
          <div className="h-300 section" title="标题一">内容1</div>
          {
            l.length > 4 && <div className="h-300 section" title="标题二">内容二</div>
          }
        </Tabs>
      </div>
    </div>
  )
}