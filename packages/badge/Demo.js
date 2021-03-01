import React from 'react'
import Badge from "./index"
import './style'
import Icon from "../icon"
import '../icon/style'

export default function Page() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <div className="demo-page-cnt">
        <Badge content="5" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge content="0" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge content="10" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge content="Hot" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge dot><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
      </div>
      <div className="demo-page-title">最大值</div>
      <div className="demo-page-cnt">
        <Badge content="20" max="9" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge content="50" max="20" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge content="200" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
      </div>
      <div className="demo-page-title">自定义颜色</div>
      <div className="demo-page-cnt">
        <Badge content="5" color="#2F86F6" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge content="10" color="#2F86F6" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge content="Hot" color="#2F86F6" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge color="#2F86F6" dot><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
      </div>
      <div className="demo-page-title">自定义徽标内容</div>
      <div className="demo-page-cnt">
        <Badge renderContent={<Icon name="success" />} style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge renderContent={<Icon name="wrong" />} style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
        <Badge renderContent={<Icon name="visible" />} style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
      </div>
      <div className="demo-page-title">独立展示</div>
      <div className="demo-page-cnt">
        <Badge content="30" style={{marginRight: '35px'}} />
        <Badge content="200" style={{marginRight: '15px'}} />
      </div>
    </div>
  )
}