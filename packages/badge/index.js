import React from 'react'
import classNames from "../utils/classnames"

export default function Badge(props) {

  const {
    content,
    max = 99,
    dot = false,
    color,
    children,
    renderContent,
    ...other
  } = props

  const dotCls = classNames('ui-badge-fixed', {'ui-badge-dot': dot})
  const customStyl = color ? {background: color} : {}

  function RenderContent() {
    if (renderContent) {
      return renderContent
    }
    if (isNaN(content)) {
      return content
    } else {
      return content > parseInt(max) ? max + '+' : content
    }
  }

  return (
    <div className="ui-badge" { ...other }>
      { children }
      {
        ((content && content !== '0') || dot || renderContent) && <div className={dotCls} style={customStyl}>{ dot ? '' : RenderContent() }</div>
      }
    </div>
  )
}