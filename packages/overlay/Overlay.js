import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import classNames from "../utils/classnames"

export default function Overlay(props) {
  const {
    show = false, // 是否显示
    closeable = true, // 点击遮罩层是否会关闭
    lockScroll = true, // 锁定背景滚动
    transparent = false, // 遮罩层是否透明
    isShowLay = true, // 是否展示遮罩
    position = 'center', // 内容展示的区域

    close,
    container = document.body, // 挂在节点 默认是 document.body
    children
  } = props

  const [mounted, setMounted] = useState(false)

  const el = useRef(document.createElement('div'))

  const shadeCls = classNames(
    'ui-overlay-shade',
    {
      'transparent': transparent
    },
  )

  const cntCls = classNames(
    'ui-overlay-cnt',
    `ui-overlay-${position}`
  )

  if (show && !mounted) { // show modal
    setMounted(show)
  }

  function overlayHandle() {
    if (closeable) {
      close && close()
    }
  }

  function onAnimationEnd() {
    if (!show) {
      setMounted(false)
      if (lockScroll) {
        container.style.overflow = ''
      }
      el.current && container.removeChild(el.current)
    }
  }

  useEffect(() => {
    if (mounted) {
      setMounted(true)
      if (lockScroll) {
        container.style.overflow = 'hidden'
        container.appendChild(el.current)
      }
    }
  }, [mounted])

  if (mounted) {
    return ReactDOM.createPortal (
      <div className="ui-overlay">
        { isShowLay && (
          <Animation show={show} name="fade" onAnimationEnd={onAnimationEnd}>
            <div className={shadeCls} onClick={overlayHandle} />
          </Animation>
        ) }
        <Animation show={show} name="fade" onAnimationEnd={onAnimationEnd}>
          <div className={cntCls}>
            {children}
          </div>
        </Animation>
      </div>,
      el.current
    )
  }

  return null
}

function Animation(props) {
  const {
    name = 'fade', // 动画名称
    show = false,
    children,
    onAnimationEnd
  } = props

  return (
    <div className={`ui-animation ui-${name}-${show ? 'in' : 'out'}`} onAnimationEnd={onAnimationEnd}>
      { children }
    </div>
  )

}