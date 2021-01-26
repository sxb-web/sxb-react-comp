import React, { useState } from 'react'
import VirtualKeyboard from "./index"
import './style'

export default function Page() {

  const [value, setValue] = useState('')

  function onInput(e) {
    console.log('input', e)
    setValue(e)
  }

  function onChange(e) {
    console.log('change', e)
  }

  function onConfirm(e) {
    console.log('confirm', e)
  }
  function onHide(e) {
    console.log('onHide', e)
  }

  return (
    <div className="demo-page">
      <div className="demo-page-title">基础演示</div>
      <input value={value} readOnly />
      <VirtualKeyboard type="number" maxlength={3} value={value} onChange={onChange} onInput={onInput} onHide={onHide} onConfirm={onConfirm} />
    </div>
  )
}