import React from 'react'
import Image from './index'
import './style'

export default function ImageDemo() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <div className="demo-page-cnt">
        <Image src="https://img01.yzcdn.cn/vant/cat.jpeg" width="100px" height="100px"  />
      </div>
      <div className="demo-page-title">填充模式</div>
      <div className="demo-page-cnt" style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>
        <div>
          <Image src="https://img01.yzcdn.cn/vant/cat.jpeg" width="100px" height="100px" fit="contain" />
          <p>contain</p>
        </div>
        <div>
          <Image src="https://img01.yzcdn.cn/vant/cat.jpeg" width="100px" height="100px" fit="cover" />
          <p>cover</p>
        </div>
        <div>
          <Image src="https://img01.yzcdn.cn/vant/cat.jpeg" width="100px" height="100px" fit="none" />
          <p>none</p>
        </div>
        <div>
          <Image src="https://img01.yzcdn.cn/vant/cat.jpeg" width="100px" height="100px" fit="scale-down" />
          <p>scale-down</p>
        </div>
      </div>
      <div className="demo-page-title">圆形图片</div>
      <div className="demo-page-cnt">
        <Image src="https://img01.yzcdn.cn/vant/cat.jpeg" width="100px" height="100px" round />
      </div>
      <div style={{paddingTop: '1000px'}}>
        <Image src="https://img.yzcdn.cn/vant/cat.jpeg" fit="cover" round />
      </div>
    </div>
  )
}
