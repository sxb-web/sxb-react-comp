import React, { useEffect, useState } from 'react'
import TabsTitle from "./index"
import './style/index'

const list = ['新车', '二手车', '美容保养', '洗车打蜡', '装饰配件', '改装装潢', '汽车维修', '其他服务']
export default function Page() {
  const [active, setActive] = useState(0)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  return (
    <div className="demo-page">
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
      <TabsTitle active={b} isShowLine={false} list={list} onChange={e => setB(e)}>
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
      <TabsTitle active={c} list={list} onChange={e => setC(e)}>
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
    </div>
  )
}