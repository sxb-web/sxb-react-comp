import React, { useState } from 'react'
import VirtualKeyboard from "./index"
import './style'

export default function Page() {

  const [value, setValue] = useState(0)

  function onInput(e) {
    console.log('input', e)
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
      <VirtualKeyboard value={value} onChange={onChange} onInput={onInput} onHide={onHide} onConfirm={onConfirm} />
    </div>
  )
}