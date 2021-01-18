import React, { useState, useRef } from 'react'
import TabsTitle from "./index"
import './style/index'
import Button from "../button"
import "../button/style"
import Overlay from "../overlay"
import "../overlay/style"

const list = ['新车', '二手车', '美容保养', '洗车打蜡', '装饰配件', '改装装潢', '汽车维修', '其他服务']
export default function Page() {
  const [active, setActive] = useState(0)
  const [a, setA] = useState(5)
  const [b, setB] = useState(4)
  const [c, setC] = useState(3)
  const [d, setD] = useState(4)
  const [show, setShow] = useState(false)
  return (
    <div className="demo-page" style={{background: '#f8f8f8'}}>
      <div className="demo-page-title">基础演示</div>
      <TabsTitle active={active} list={list.slice(0, 3)} onChange={e => setActive(e)}>
        {
          (item, index) => (
            <div className="item" style={{padding: '20px'}}>{item}</div>
          )
        }
      </TabsTitle>
      <div className="demo-page-title">可滑动</div>
      <TabsTitle active={a} list={list} onChange={e => setA(e)}>
        {
          (item, index) => (
            <div className="item" style={{padding: '20px'}}>{item}</div>
          )
        }
      </TabsTitle>
      <div className="demo-page-title">复杂用法一</div>
      <TabsTitle active={b} list={list} onChange={e => setB(e)}>
        {
          (item, isActive) => (
            <div className={isActive ? 'test-tabs-title active' : 'test-tabs-title'}>
              <div className="name">{item}</div>
              <div className="desc">今日优惠</div>
            </div>
          )
        }
      </TabsTitle>
      <div className="demo-page-title">复杂用法二</div>
      <div style={{background: '#2F86F6', margin: '0 -10px'}}>
        <TabsTitle
          active={c}
          list={list}
          background="transparent"
          lineClass="up-arrow"
          rightSlot={(
            <div style={{height: '78px', lineHeight: '78px', color: '#fff', padding: '0 5px', boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.2)'}}>
              展开
            </div>
          )}
          onChange={e => setC(e)}>
          {
            (item, isActive) => (
              <div className={isActive ? 'test-tabs-title-special active' : 'test-tabs-title-special'}>
                <div className="img-box">
                  <img src="https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/ClueDistribution/localnews/2020-05-21/1590044385653.jpg" />
                </div>
                <div className="name">{item}</div>
              </div>
            )
          }
        </TabsTitle>
        <div className="section h-300"></div>
      </div>
      <div className="demo-page-title">嵌套在弹窗中</div>
      <Button type="primary" onClick={() => setShow(true)}>点击唤醒</Button>
      <Overlay show={show} position="top" animation="slide-down" close={() => setShow(false)}>
        <TabsTitle active={b} list={list} onChange={e => setB(e)}>
          {
            (item, isActive) => (
              <div className={isActive ? 'test-tabs-title active' : 'test-tabs-title'}>
                <div className="name">{item}</div>
                <div className="desc">今日优惠</div>
              </div>
            )
          }
        </TabsTitle>
      </Overlay>
    </div>
  )
}

function TextChild() {

  const target = useRef(null)
  //
  // React.useEffect(() => {
  //   console.log(target.current.offsetWidth)
  // })

  const measuredRef = useCallback(node => {
    if (node !== null) {
      console.log(node, node.getBoundingClientRect().height);
    }
  }, []);


  // React.useEffect(() => {
  //   // const node = React.findDOMNode(target.current)
  //   // console.log(node)
  //   console.log(document.getElementById('test'), target.current)
  //   return () => {
  //     console.log(document.getElementById('test').getBoundingClientRect())
  //   }
  // }, [])

  return (
    <div id="test" style={{width: "300px", height: "200px", background: '#fff'}} ref={measuredRef}>
      <input  autoFocus />
    </div>
  )
}