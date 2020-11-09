import React from 'react'
import Toast from './index'
import './style'
import Cell from '../cell'
import '../cell/style'

export default function Page() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <div className="demo-page-cnt">
        <Cell title="文字提示" link  onClick={() => Toast('文字提示')} />
        <Cell title="加载提示" link  onClick={() => Toast.loading('加载中...')} />
        <Cell title="成功提示" link  onClick={() => Toast.success('支付成功')} />
        <Cell title="失败提示" link  onClick={() => Toast.fail('支付失败')} />
      </div>
    </div>
  )
}