import React from 'react'
import Icon from "../icon"
import classNames from "../utils/classnames"

function getStyle(color, background, style = {}) {
  let _style = {}
  if (color) {
    _style.color = color
  }
  if (background) {
    _style.background = background
  }

  return {..._style, ...style}
}


export default function NoticeBar(props) {

  const {
    mode, // closeable link
    text,
    scroll = false, // 是否滚动
    warp = false, // 是否换行显示
    color,
    background,
    icon,
    children,
    style,
    className,
    ...other
  } = props

  const sty = getStyle(color, background, style)
  const cls = classNames("ui-notice-bar", {'ui-notice-bar-warp': warp}, className)
  let rightIcon = ''
  if (mode === 'closeable') {
    rightIcon = 'close'
  }
  if (mode === 'link') {
    rightIcon = 'arrow-right'
  }

  return (
    <div className={cls} style={sty} {...other}>
      {
        icon && <IconComponent url={icon} />
      }
      <div className="ui-notice-bar-box">
        <div className="ui-notice-bar-content">{children || text}</div>
      </div>
      {
        mode && <IconComponent url={rightIcon} />
      }
    </div>
  )
}

function IconComponent({url}) {
  if (url) {
    const isHttp = url.indexOf('http') > -1
    if (isHttp) {
      return <div className="ui-notice-bar-icon"><img src={url} /></div>
    } else {
      return <div className="ui-notice-bar-icon"><Icon name={url} size="16px" /></div>
    }

  }
  return null
}
