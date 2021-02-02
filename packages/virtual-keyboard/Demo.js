import React, { useState } from 'react'
import VirtualKeyboard from "./index"
import './style'
import Toast from "../toast"
import '../toast/style'
import Button from "../button"
const list = [{type: 'number', name: '数字键盘'}, {type: 'digit', name: '带小数点键盘'}, {type: 'idCard', name: '身份证键盘'}]

export default function Page() {

  const [value, setValue] = useState('')
  const [type, setType] = useState('number')

  function onInput(e) {
    console.log('input', e)
    setValue(e)
  }

  function onConfirm(e) {
    console.log('confirm', e)
  }
  function onHide(e) {
    console.log('onHide', e)
  }

  return (
    <div className="demo-page">
      <div className="demo-page-title">平铺非受控键盘</div>
      <div>
        {
          list.map((item, index) => <Button size="mini" key={index} type={type === item.type ? 'primary' : 'default'} onClick={() => setType(item.type)}>{item.name}</Button>)
        }
      </div>
      <VirtualKeyboard
        type={type}
        onInput={e => Toast(e)}
        onHide={() => Toast('关闭')}
        onConfirm={() => Toast('完成')}
        onDelete={() => Toast('删除')}
      />
      <div className="demo-page-title">平铺受控键盘</div>
      <div>
        <input value={value} placeholder="点击虚拟键盘查看" readOnly style={{width: '120px'}} />
        {
          list.map((item, index) => <Button size="mini" key={index} type={type === item.type ? 'primary' : 'default'} onClick={() => setType(item.type)}>{item.name}</Button>)
        }
      </div>
      <VirtualKeyboard
        control
        maxLength={3}
        value={value}
        type={type}
        onInput={e => setValue(e)}
      />
    </div>
  )
}