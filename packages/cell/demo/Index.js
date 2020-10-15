import React from 'react'
import Cell from '../index'
import "../style"

export default function Index() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">基本</div>
      <div className="demo-page-cnt">
        <Cell title="交通银行(尾号3089)" value="展示摘要描述" desc="附加文案" link />
        <Cell title="交通银行(尾号3089)" desc="附加文案" link />
        <Cell title="余额" value="1,000" link />
        <Cell title="禁用按钮" desc="全部置灰，不可点击" disabled value="禁用的项目" link />
      </div>
      <div className="demo-page-title">带有icon</div>
      <div className="demo-page-cnt">
        <Cell title="交通银行(尾号3089)" icon="http://iph.href.lu/30x30?text=招" iconSize="30px" iconType="round" value="展示摘要描述" desc="附加文案" link />
        <Cell title="余额" icon="home" value="1,000" link />
      </div>
    </div>
  )
}