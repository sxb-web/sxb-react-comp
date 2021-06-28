import React from 'react'
import Row from './index'
import './style'
import Col from '../col'
import '../col/style'

export default function () {
  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <Row>
        <Col span="8" className="col-demo">span:8</Col>
        <Col span="8" className="col-demo light">span:8</Col>
        <Col span="8" className="col-demo">span:8</Col>
      </Row>
      <Row className="mt-10">
        <Col span="4" className="col-demo">span:4</Col>
        <Col span="10" offset="4" className="col-demo light">span:10 offset:4</Col>
      </Row>
      <Row className="mt-10">
        <Col span="12" offset="12" className="col-demo">span:12 offset:12</Col>
      </Row>
      <div className="demo-page-title">在列元素之间增加间距</div>
      <Row gutter={20}>
        <Col span="8"><div className="col-demo">span:8</div></Col>
        <Col span="8"><div className="col-demo">span:8</div></Col>
        <Col span="8"><div className="col-demo">span:8</div></Col>
      </Row>
      <div className="demo-page-title">Flex 布局</div>
      <Row>
        <Col span="6" className="col-demo">span:6</Col>
        <Col span="6" className="col-demo light">span:6</Col>
        <Col span="6" className="col-demo">span:6</Col>
      </Row>
      <Row justify="center" className="mt-10">
        <Col span="6" className="col-demo">span:6</Col>
        <Col span="6" className="col-demo light">span:6</Col>
        <Col span="6" className="col-demo">span:6</Col>
      </Row>
      <Row justify="flex-end" className="mt-10">
        <Col span="6" className="col-demo">span:6</Col>
        <Col span="6" className="col-demo light">span:6</Col>
        <Col span="6" className="col-demo">span:6</Col>
      </Row>
    </div>
  )
}