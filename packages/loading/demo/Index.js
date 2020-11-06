import React from 'react'
import Loading from "../index"
import "../style"

export default function Index() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">加载类型</div>
      <div className="demo-page-cnt" style={{display: 'flex'}}>
        <Loading type="spinner" />
        <Loading type="circular" />
      </div>
      <div className="demo-page-title">自定义颜色</div>
      <div className="demo-page-cnt" style={{display: 'flex'}}>
        <Loading type="spinner" color="blue" />
        <Loading type="circular" color="blue" />
      </div>
      <div className="demo-page-title">自定义大小</div>
      <div className="demo-page-cnt" style={{display: 'flex'}}>
        <Loading type="spinner" size="20" />
        <Loading type="circular" size="20" />
      </div>
      <div className="demo-page-title">加载文案</div>
      <div className="demo-page-cnt" style={{display: 'flex'}}>
        <Loading type="spinner" size="20">加载中...</Loading>
        <Loading type="circular" size="20">加载中...</Loading>
      </div>
      <div className="demo-page-title">垂直排列</div>
      <div className="demo-page-cnt" style={{display: 'flex'}}>
        <Loading type="spinner" vertical size="20">加载中...</Loading>
        <Loading type="circular" vertical size="20">加载中...</Loading>
      </div>
    </div>
  )
}
