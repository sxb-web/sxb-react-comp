import React, { useState } from 'react'
import Cell from "../cell"
import "../cell/style"
import Picker from './index'
import './style'

const list = ['92#', '93#', '94#', '95#']
const list1 = ['1号枪', '3号枪', '4号枪', '5号枪']
const cascadeList = [
  {
    text: '四川省',
    children: [
      {
        text: '成都市',
        children: [
          {
            text: '武侯区'
          },
          {
            text: '青羊区'
          },
          {
            text: '高新区'
          }
        ]
      },
      {
        text: '绵阳市',
        children: [
          {
            text: '涪陵区'
          },
          {
            text: '本地区'
          },
          {
            text: '生活区'
          },
          {
            text: '深海区'
          }
        ]
      }
    ]
  },
  {
    text: '山西省',
    children: [
      {
        text: '太原市',
        children: [
          {
            text: '小店区'
          },
          {
            text: '假草坪区'
          },
          {
            text: '榆次区'
          }
        ]
      },
      {
        text: '大同市',
        children: [
          {
            text: '平城区'
          },
          {
            text: '矿区'
          },
          {
            text: '太坪区'
          }
        ]
      }
    ]
  }
]

export default function Page() {

  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)

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
      <Cell title="多列选择" link onClick={() => setShow1(true)} />
      <Picker
        show={show1}
        columns={[list, list1]}
        close={() => setShow1(false)}
        onCancel={() => console.log('cancel')}
        onConfirm={(value, index) => console.log('confirm:', value, index)}
        onChange={(value, index) => console.log('onChange:', value, index)}
      />
      <Cell title="级联选择" link onClick={() => setShow2(true)} />
      <Picker
        show={show2}
        columns={cascadeList}
        close={() => setShow2(false)}
      />
    </div>
  )
}