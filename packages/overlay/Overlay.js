import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import classNames from "../utils/classnames"
import Animation from "../animation"

const positionList = ['center', 'top', 'left', 'right', 'bottom']
export default function Overlay(props) {
  const {
    show = false, // 是否显示
    closeable = true, // 点击遮罩层是否会关闭
    lockScroll = true, // 锁定背景滚动
    transparent = false, // 遮罩层是否透明
    isShowLay = true, // 是否展示遮罩
    position = 'center', // 内容展示的区域 仅支持 'center' 'top', 'left', 'right', 'bottom'
    animation = 'fade', // 内容动画
    duration = 200, // 整个动画的执行时间
    close,
    container = document.body, // 挂在节点 默认是 document.body
    children,
    rootStyle
  } = props

  const _position = positionList.indexOf(position) > -1 ? position : 'fade'

  const [mounted, setMounted] = useState(false)

  const el = useRef(document.createElement('div'))

  const shadeCls = classNames(
    'ui-overlay-shade',
    {
      'transparent': transparent
    },
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
    }
  }

  useEffect(() => {
    if (mounted) {
      if (lockScroll) {
        container.style.overflow = 'hidden'
      }
      container.appendChild(el.current)
    }
    return () => {
      if (mounted) {
        if (lockScroll) {
          container.style.overflow = ''
        }
        el.current && container.removeChild(el.current)
      }
    }
  }, [mounted])

  if (mounted) {
    return ReactDOM.createPortal (
      <div className={`ui-overlay ${_position} ${!isShowLay ? 'without-shade' : ''}`} style={rootStyle}>
        { isShowLay && (
          <Animation className={shadeCls} show={show} name="fade" duration={duration} onAnimationEnd={onAnimationEnd} onClick={overlayHandle} />
        ) }
        <Animation className="ui-overlay-cnt" show={show} name={animation} duration={duration}>
          {children}
        </Animation>
      </div>,
      el.current
    )
  }
  return null
}