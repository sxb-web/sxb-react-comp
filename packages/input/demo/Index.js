import React, {useReducer} from 'react'
import Input from '../index'
import '../style'

function reducer(state, action) {
  switch (action.type) {
    case 'custom': return {...state, ...action.payload}
  }
}

export default function Index() {

  const [state, dispatch] = useReducer(reducer, {
    text: '',
    idCard: '',
    bankCard: '',
    phone: '',
    integer: '',
    digit: '',
    money: ''
  })

  function inputChange(e) {
    // console.log('output:', e.target.value)
    dispatch({type: 'custom', payload: {[e.target.name]: e.target.value}})
  }

  return (
    <div className="demo-page">
      <div className="demo-page-title">基本用法</div>
      <div className="demo-page-cnt">
        <Input type="text" name="text" value={state.text} onChange={inputChange} label="普通文本"  clearable maxLength="5" onChange={inputChange} placeholder="随便说点儿什么"  />
        <Input type="idCard" name="idCard" value={state.idCard} onChange={inputChange} clearable label="身份证" placeholder="18位身份证"  />
        <Input type="bankCard" name="bankCard" value={state.bankCard} onChange={inputChange} clearable label="银行卡" placeholder="输入银行卡号"  />
        <Input type="phone" name="phone" value={state.phone} onChange={inputChange} clearable label="手机号" placeholder="随便说点儿什么"  />
        <Input type="money" name="money" value={state.money} onChange={inputChange} clearable label="金额" placeholder="随便说点儿什么"  />
        <Input type="integer" name="integer" value={state.integer} onChange={inputChange} clearable label="整数" placeholder="随便说点儿什么"  />
        <Input type="digit" name="digit" value={state.digit} onChange={inputChange} clearable label="带小数" placeholder="随便说点儿什么"  />
        <Input type="money" value="111222" clearable readOnly label="readOnly" placeholder="随便说点儿什么"  />
        <Input type="money" value="1112223" clearable disabled label="disabled" placeholder="随便说点儿什么"  />
      </div>
    </div>
  )
}