import React from 'react'
import './index.scss'
import Button from  '../packages/button'
import '../packages/button/style'
export default function Index() {
  return (
    <div className="index-page">
      <div className="header">
        <img src="http://sxbcar.com/static/img/product_1.png" />
        <h3>DawnUI</h3>
      </div>
      <div className="index-container">
        <h1>DawnUI</h1>
        <div className="description">一个react 移动端组件库</div>
        <div>
          <Button tag="a" type="primary" round href="#/docs/quickstart" className="mr-15">开始使用</Button>
          <Button type="info" round plain href="#/demos/index">扫码体验</Button>
        </div>
      </div>
      <div className="intro">
        <div className="intro-item">
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png" />
          <p className="intro-item-title">惊艳</p>
          <p className="intro-item-desc">寻觅一眼惊艳的完美作品</p>
        </div>
        <div className="intro-item">
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png" />
          <p className="intro-item-title">热门</p>
          <p className="intro-item-desc">时下最热门的react hook</p>
        </div>
        <div className="intro-item">
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png" />
          <p className="intro-item-title">实用</p>
          <p className="intro-item-desc">提供移动端开发的大部分组件</p>
        </div>
      </div>
      <div className="footer">
        <p className="mt-15">MIT Licensed | Copyright © 2020</p>
      </div>
    </div>
  )
}