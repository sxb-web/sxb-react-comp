import React from 'react'
import Icon from "../icon"

export default function NoticeBar(props) {

  const {
    mode,
    icon,
    children
  } = props

  return (
    <div className="ui-notice-bar">
      {
        icon && <IconComponent url={icon} />
      }
      <div className="ui-notice-bar-box">
        <div className="ui-notice-bar-content">{children}</div>
      </div>
    </div>
  )
}

function IconComponent({url}) {
  if (url) {
    const isHttp = url.indexOf('http') > -1
    if (isHttp) {
      return <div className="ui-notice-bar-icon"><img src={url} /></div>
    } else {
      return <div className="ui-notice-bar-icon"><Icon name={url} /></div>
    }

  }

  return null
}