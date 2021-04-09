import React from 'react'
import Image from './index'
import './style'

const avatar = "https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/ClueDistribution/localCarBusiness/2020-06-09/1591660808250.jpg"

export default function ImageDemo() {

  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <div className="demo-page-cnt">
        <Image src={avatar} width="100px" height="100px"  />
      </div>
      <div className="demo-page-title">填充模式</div>
      <div className="demo-page-cnt" style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>
        <div className="mr-15">
          <Image src={avatar} width="100px" height="100px" fit="contain" />
          <p>contain</p>
        </div>
        <div className="mr-15">
          <Image src={avatar} width="100px" height="100px" fit="cover" />
          <p>cover</p>
        </div>
        <div>
          <Image src={avatar} width="100px" height="100px" fit="none" />
          <p>none</p>
        </div>
        <div className="mr-15">
          <Image src={avatar} width="100px" height="100px" fit="fill" />
          <p>fill</p>
        </div>
        <div>
          <Image src={avatar} width="100px" height="100px" fit="scale-down" />
          <p>scale-down</p>
        </div>
      </div>
      <div className="demo-page-title">圆角图片</div>
      <div className="demo-page-cnt">
        <Image src={avatar} width="100px" height="100px" radius="10px" />
      </div>
      <div className="demo-page-title">圆形图片</div>
      <div className="demo-page-cnt">
        <Image src={avatar} width="100px" height="100px" round />
      </div>
      <div className="demo-page-title">懒加载</div>
      <div>
        <Image src="https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/ClueDistribution/localCarBusiness/2020-06-09/1591660749955.jpg" fit="cover" width="100px" height="100px" lazy round />
      </div>
      <div>
        <Image src="https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/ClueDistribution/localCarBusiness/2020-06-09/1591660749955.jpg" fit="cover" width="100px" height="100px" lazy radius="10px" />
      </div>
      <div className="demo-page-title">padding-top</div>
      <div style={{width: '100px'}}>
        <div style={{width: '100%', paddingTop: '200%', position: 'relative'}}>
          <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
            <Image src="https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/ClueDistribution/localCarBusiness/2020-06-09/1591660749955.jpg" fit="cover" lazy />
          </div>
        </div>
      </div>
      <div className="demo-page-title">容器内Y滚动</div>
      <div style={{height: '200px', overflowY: 'scroll'}} id="container">
        {
          new Array(11).fill('').map((item, index) => (
            <Image src={avatar} width="100px" height="100px" lazy round key={index} overflow />
          ))
        }
      </div>
      <div className="demo-page-title">容器内X滚动</div>
      <div style={{height: '100px', overflowX: 'scroll', display: 'flex'}} id="container">
        {
          new Array(11).fill('').map((item, index) => (
            <div style={{flex: 'none'}} key={index} >
              <Image src={avatar} width="100px" height="100px" lazy round overflow />
            </div>
          ))
        }
      </div>
    </div>
  )
}
