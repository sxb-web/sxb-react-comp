import React from 'react'
import Input from '../index'
import '../style'

export default function Index() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">基本用法</div>
      <div className="demo-page-cnt">
        <Input clearable label="普通文本" placeholder="随便说点儿什么"  />
        <Input type="idCard" value="14062419950510723X" clearable label="身份证" placeholder="18位身份证"  />
        <Input type="bankCard" value="14062419950510723232" clearable label="银行卡" placeholder="输入银行卡号"  />
        <Input type="phone" value="18512807546" clearable label="手机号" placeholder="随便说点儿什么"  />
        <Input type="money" value="111222" clearable label="金额" placeholder="随便说点儿什么"  />
        <Input type="money" value="111222" clearable readOnly label="readOnly" placeholder="随便说点儿什么"  />
        <Input type="money" value="111222" clearable disabled label="disabled" placeholder="随便说点儿什么"  />
      </div>
    </div>
  )
}