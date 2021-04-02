import React from 'react'
import ResultPage from "./index"
import './style'

const list = ['error', 'search', 'empty', 'wechat']

export default function Page() {
  return (
    <div className="demo-page">
      {
        list.map((item, index) => (
          <div key={index}>
            <div className="demo-page-title">{ item }</div>
            <ResultPage type={item} />
          </div>
        ))
      }
    </div>
  )
}