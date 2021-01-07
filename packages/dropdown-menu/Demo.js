import React, { useState } from 'react'
import DropdownMenu from "../dropdown-menu"
import "../dropdown-menu/style"

const actions = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
  ]
export default function Page() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">基本</div>
      <div className="demo-page-cnt">
        <div style={{display: 'flex', align: 'center'}}>
          <DropdownMenu title="油号" actions={actions} />
          <DropdownMenu title="价格" actions={actions} />
          <DropdownMenu title="综合排序" actions={actions} />
        </div>
      </div>
    </div>
  )
}