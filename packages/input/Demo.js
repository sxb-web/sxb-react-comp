import React, {useReducer} from 'react'
import Input from './index'
import Button from "../button"
import '../button/style'
import './style'

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
    number: '',
    digit: '',
    money: '',
    password: ''
  })

  function inputChange(e) {
    // console.log('output:', e.target.value)
    dispatch({type: 'custom', payload: {[e.name]: e.value}})
  }

  return (
    <div className="demo-page">
      <div className="demo-page-title">基本用法</div>
      <div className="demo-page-cnt">
        <Input type="text" required name="text" value={state.text} onChange={inputChange} label="普通文本"  clearable maxLength="5" placeholder="随便说点儿什么"  />
        <Input type="idCard" name="idCard" value={state.idCard} onChange={inputChange} clearable label="身份证" placeholder="18位身份证"  />
        <Input type="bankCard" name="bankCard" value={state.bankCard} onChange={inputChange} clearable label="银行卡" placeholder="请输入银行卡"  />
        <Input type="phone" name="phone" value={state.phone} onChange={inputChange} clearable label="手机号" placeholder="随便说点儿什么"  />
        <Input type="number" maxLength={4} name="number" value={state.number} onChange={inputChange} clearable label="验证码" placeholder="请输入四位验证码" />
        <Input type="digit" maxLength={4} name="digit" value={state.digit} onChange={inputChange} clearable label="带小数" placeholder="随便说点儿什么"  />
        <Input type="password" name="password" value={state.password} onChange={inputChange} clearable label="密码" placeholder="随便说点儿什么"  />
        <Input type="text" value="111222" clearable readOnly label="readOnly" placeholder="随便说点儿什么"  />
        <Input type="text" value="1112223" clearable disabled label="disabled" placeholder="随便说点儿什么"  />
      </div>
      <div className="demo-page-title">格式化</div>
      <div className="demo-page-cnt">
        <Input type="idCard" border={false} isFormat name="idCard" value={state.idCard} onChange={inputChange} clearable label="身份证" placeholder="18位身份证"  />
        <Input type="bankCard" isFormat name="bankCard" value={state.bankCard} onChange={inputChange} clearable label="银行卡" placeholder="请输入银行卡"  />
        <Input type="phone" isFormat name="phone" value={state.phone} onChange={inputChange} clearable label="手机号" placeholder="随便说点儿什么"  />
        <Input type="digit" isFormat maxLength={4} name="digit" value={state.digit} onChange={inputChange} clearable label="带小数" placeholder="随便说点儿什么"  />
      </div>
      <div className="demo-page-title">插槽</div>
      <div className="demo-page-cnt">
        <Input type="number" maxLength={4} name="number" value={state.number} onChange={inputChange} clearable label="验证码" placeholder="请输入四位验证码">
          <Button type="primary" size="mini">获取验证码</Button>
        </Input>
      </div>
      <div className="demo-page-title">自定义label 宽度</div>
      <div className="demo-page-cnt">
        <Input type="number" labelWidth={100} align="center" value={state.number} onChange={inputChange} clearable label="验证码" placeholder="请输入四位验证码" />
      </div>
      <div className="demo-page-title">遮罩</div>
      <div className="demo-page-cnt">
        <Input type="number" mask labelWidth={100} onClick={() => alert('111')} value="吹啊吹啊我的骄傲房中，崔不乱我阿斯利康的阿喀琉斯的价时空" clearable label="验证码" placeholder="请输入四位验证码" />
      </div>
    </div>
  )
}