import React from 'react'
import Cell from "../cell"
import Tag from './index'
import '../cell/style'
import './style'

export default function Page() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <Cell title="默认 类型"><Tag>标签</Tag></Cell>
      <Cell title="primary 类型"><Tag type="primary">标签</Tag></Cell>
      <Cell title="link 类型"><Tag type="link">标签</Tag></Cell>
      <Cell title="error 类型"><Tag type="error">标签</Tag></Cell>
      <Cell title="warn 类型"><Tag type="warn">标签</Tag></Cell>
      <div className="demo-page-title">样式风格</div>
      <Cell title="空心样式"><Tag type="primary" plain>标签</Tag></Cell>
      <Cell title="圆角样式"><Tag type="primary" round>标签</Tag></Cell>
      <Cell title="圆角空心样式"><Tag type="primary" plain round>标签</Tag></Cell>
      <div className="demo-page-title">标签大小</div>
      <Cell title="普通大小"><Tag type="primary">标签</Tag></Cell>
      <Cell title="medium大小"><Tag type="primary" size="medium">标签</Tag></Cell>
      <Cell title="large大小"><Tag type="primary" size="large">标签</Tag></Cell>
      <div className="demo-page-title">自定义样式</div>
      <Cell title="颜色主题"><Tag color="pink">标签</Tag><Tag color="pink" plain>标签</Tag><Tag color="pink" round>标签</Tag><Tag color="pink" round plain>标签</Tag></Cell>
      <Cell title="渐变"><Tag fillColor="linear-gradient(90deg, #FC7353 0%, #FC9153 100%)" textColor="#fff">标签</Tag></Cell>
      <Cell title="特殊样式"><Tag fillColor="linear-gradient(90deg, #FC7353 0%, #FC9153 100%)" textColor="#fff" round style={{borderBottomLeftRadius: 0}}>标签</Tag></Cell>
    </div>
  )
}