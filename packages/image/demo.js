import React from 'react'
import Image from './index'
import './style'

export default function ImageDemo() {
  return (
    <div style={{padding: '20px'}}>
      <Image className="mr-15" title="default image" />
      <Image src="" />
      <div style={{paddingTop: '1000px'}}>
        <Image src="https://img.yzcdn.cn/vant/cat.jpeg" fit="cover" lazy="" />
      </div>
    </div>
  )
}
