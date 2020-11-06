import React, { useState } from 'react'
import useLazyLoad from "../index"
import Button from "../../button"

const url = 'https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/stream/vip/manager.png'
const defaultUrl = 'https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/stream/vip/pic.png'
const temp = new Array(10).fill(1)

const style = {
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '50vh'
  },
  imgWrap: {
    width: '100px',
    height: '100px',
    flex: 'none',
    margin: '20px',
    backgroundColor: '#efefef',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    maxWidth: '100px',
    maxHeight: '100px',
    objectFit: 'contain'
  }
}

export default function LazyLoadDemo() {
  const [img, setImg] = useState(temp)

  useLazyLoad(true)

  function loadMoreImg() {
    setImg(img.concat(temp))
  }

  return (
    <div style={style.imgContainer}>
      {img.map((i, j) => (
        <div key={j} style={style.imgWrap}>
          <img style={style.img} src={defaultUrl} data-src={url} alt="lazy" />
        </div>
      ))}
      <Button tag="a" type="primary" onClick={loadMoreImg}>加载更多图片</Button>
    </div>
  )
}
