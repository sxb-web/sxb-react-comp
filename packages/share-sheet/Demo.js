import React, { useState } from 'react'
import Cell from "../cell"
import '../cell/style/index'
import ShareSheet from "./index"
import './style'

const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' }
]

const options1 = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ]
]

export default function Index() {

  const [a, setA] = useState(false)
  const [b, setB] = useState(false)

  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <div className="demo-page-cnt">
        <Cell title="显示分享面板" link onClick={() => setA(true)} />
        <ShareSheet options={options} show={a} close={() => setA(false)} />
      </div>
      <div className="demo-page-title">展示多行选项</div>
      <div className="demo-page-cnt">
        <Cell title="显示分享面板" link onClick={() => setB(true)} />
        <ShareSheet options={options1} cancelText="取消" show={b} close={() => setB(false)} onClick={e => console.log(e)} />
      </div>
    </div>
  )
}
