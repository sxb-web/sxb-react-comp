import React, { useContext, useState, useEffect, useRef } from 'react'
import classNames from "../utils/classnames"
import { gutterContext } from "../row"

export default function Col(props) {
  const {
    span,
    offset,
    className,
    children,
    style,
    ...other
  } = props

  const gutter = parseInt(useContext(gutterContext))
  const container = useRef(null)
  const [sty, setSty] = useState(style || {})
  const cls = classNames('ui-col', className, span ? `ui-col-span-${span}` : null, offset ? `ui-col-offset-${offset}` : null)

  useEffect(() => {
    // 获取当前元素说出row 父组件所在的位置
    if (gutter > 0) {
      const position = computeIndex(container.current)
      const spaceItem = gutter / 3
      const _sty = {...sty}
      if (position.firstNode) {
        _sty.paddingRight = spaceItem * 2 + 'px'
      } else if (position.lastNode) {
        _sty.paddingLeft = spaceItem * 2 + 'px'
      } else {
        _sty.paddingLeft = spaceItem + 'px'
        _sty.paddingRight = spaceItem + 'px'
      }
      setSty(_sty)
    }
  }, [])

  return (
    <div className={cls} style={sty} {...other} ref={container}>
      {children}
    </div>
  )

}

function computeIndex(el) {
  const parentNode = el.parentNode
  const firstNode = parentNode.firstElementChild || parentNode.firstChild
  const lastNode = parentNode.lastElementChild || parentNode.lastChild
  return {
    firstNode: firstNode === el,
    lastNode: lastNode === el
  }
}