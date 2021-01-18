import React, { useState } from 'react'
import Cell from "../cell"
import "../cell/style"
import Picker from './index'
import './style'

const list = ['92#', '93#', '94#', '95#']
export default function Page() {

  const [show, setShow] = useState(false)

  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <Cell title="基础picker" link onClick={() => setShow(true)} />
      <Picker
        show={show}
        columns={list}
        close={() => setShow(false)}
        onCancel={() => console.log('cancel')}
        onConfirm={(value, index) => console.log('confirm:', value, index)}
        onChange={(value, index) => console.log('onChange:', value, index)}
      />
    </div>
  )
}