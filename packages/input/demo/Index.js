import React from 'react'
import Input from '../index'
import '../style'

export default function Index() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">基本用法</div>
      <div className="demo-page-cnt">
        <Input defaultValue="185 1280 7546" clearable label="普通文本" placeholder="随便说点儿什么"  />
        <Input textarea rows={2} autoHeight defaultValue="我们都是一个害孩子" clearable label="textarea" placeholder="随便说点儿什么"  />
      </div>
    </div>
  )
}