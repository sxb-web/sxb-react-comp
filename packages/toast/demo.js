import React, {useEffect} from 'react'
import Toast from './index'
import './style'
import Cell from '../cell'
import '../cell/style'

export default function Page() {

  useEffect(() => {

    // Toast.success({message: '我先来', position: 'top', duration: 0})
    // // Toast.success({message: '我先来2222', position: 'top'})
    // setTimeout(() => {
    //   Toast.fail('扑街啊 ')
    // }, 6000)

  }, [])

  return (
    <div className="demo-page">
      <div className="demo-page-title">基础用法</div>
      <div className="demo-page-cnt">
        <Cell title="文字提示" link  onClick={() => Toast('文字提示文字提示文字提示文字提示文字提示文字提示')} />
        <Cell title="加载提示" link  onClick={() => Toast.loading('加载中...')} />
        <Cell title="加载提示2" link  onClick={() => Toast.loading({message: '加载中...', loadingType: 'circular'})} />
        <Cell title="成功提示" link  onClick={() => Toast.success('支付成功')} />
        <Cell title="失败提示" link  onClick={() => Toast.fail('支付失败')} />
      </div>
      <div className="demo-page-title">自定义图标</div>
      <div className="demo-page-cnt">
        <Cell title="自定义图标" link  onClick={() => Toast({message: '文字提示', icon: 'home'})} />
        <Cell title="自定义图片" link  onClick={() => Toast({message: '文字提示', icon: 'https://img.yzcdn.cn/vant/logo.png'})} />
      </div>
      <div className="demo-page-title">自定义位置</div>
      <div className="demo-page-cnt">
        <Cell title="顶部展示" link  onClick={() => Toast.success({message: '文字提示文字', position: 'top'})} />
        <Cell title="底部展示" link  onClick={() => Toast.success({message: '文字提示', position: 'bottom'})} />
      </div>
    </div>
  )
}