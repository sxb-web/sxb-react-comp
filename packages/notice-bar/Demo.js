import React from 'react'
import NoticeBar from "./index"
import './style'

export default function Index() {
  return (
    <div className="demo-page">
      <div className="col-demo-title">基础用法</div>
      <NoticeBar icon="volumn" mode="link" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
    </div>
  )
}
