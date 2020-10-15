import React from 'react'
import Button from "../index"
import "../style"

export default function Index() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">按钮类型</div>
      <div className="demo-page-cnt">
        <Button type="primary" className="mt-10">主要按钮</Button>
        <Button type="niello" className="mt-10">黑金按钮</Button>
        <Button type="default" className="mt-10">默认按钮</Button>
        <Button type="warn" className="mt-10">警告按钮</Button>
        <Button type="danger" className="mt-10">危险按钮</Button>
      </div>
      <div className="demo-page-title">块级元素</div>
      <div className="demo-page-cnt">
        <Button type="primary" block className="mt-10">主要按钮</Button>
        <Button type="niello" block className="mt-10">黑金按钮</Button>
        <Button type="default" block className="mt-10">默认按钮</Button>
        <Button type="warn" block className="mt-10">警告按钮</Button>
        <Button type="danger" block className="mt-10">危险按钮</Button>
      </div>
      <div className="demo-page-title">圆角按钮</div>
      <div className="demo-page-cnt">
        <Button type="primary" block round className="mt-10">主要按钮</Button>
        <Button type="niello" round className="mt-10">黑金按钮</Button>
        <Button type="default" round className="mt-10">默认按钮</Button>
        <Button type="warn" round className="mt-10">警告按钮</Button>
        <Button type="danger" round className="mt-10">危险按钮</Button>
      </div>
      <div className="demo-page-title">朴素按钮</div>
      <div className="demo-page-cnt">
        <Button type="primary" block round plain className="mt-10">主要按钮</Button>
        <Button type="niello" plain className="mt-10">黑金按钮</Button>
        <Button type="default" plain className="mt-10">默认按钮</Button>
        <Button type="warn" plain className="mt-10">警告按钮</Button>
        <Button type="danger" plain className="mt-10">危险按钮</Button>
      </div>
      <div className="demo-page-title">按钮尺寸</div>
      <div className="demo-page-cnt">
        <Button type="primary" size="large" className="mt-10">主要按钮</Button>
        <Button type="niello" plain className="mt-10">黑金按钮</Button>
        <Button type="default" size="small" plain className="mt-10">默认按钮</Button>
        <Button type="warn" plain className="mt-10">警告按钮</Button>
        <Button type="danger" size="mini" round plain className="mt-10">危险按钮</Button>
      </div>
      <div className="demo-page-title">禁用按钮</div>
      <div className="demo-page-cnt">
        <Button type="primary" disabled size="large" className="mt-10">主要按钮</Button>
        <Button type="niello" disabled plain className="mt-10">黑金按钮</Button>
        <Button type="default" disabled size="small" plain className="mt-10">默认按钮</Button>
        <Button type="warn" disabled plain className="mt-10">警告按钮</Button>
        <Button type="danger" disabled size="mini" round plain className="mt-10">危险按钮</Button>
      </div>
    </div>
  )
}