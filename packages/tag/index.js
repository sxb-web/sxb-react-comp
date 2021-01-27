import React from 'react'
import classNames from "../utils/classnames"
export default function Tag(props) {
  const {
    className,
    type = 'default', // primary success danger warning
    size = 'normal', // normal medium large
    plain = false,
    round = false,
    children,
    style,
    color, // 主题样式
    fillColor, // 填充色
    textColor, // 文字颜色
    ...other
  } = props

  const cls = classNames(
    'ui-tag',
    `ui-tag-${type}`,
    `ui-tag-${size}`,
    {
      'ui-tag-plain': plain,
      'ui-tag-round': round
    },
    className
  )

  let colorStyle = {}

  if (color || fillColor || textColor) {
    colorStyle = {
      color: plain ? (textColor || color) : (textColor || '#fff'),
      background: plain ? (fillColor || '#fff') : (fillColor || color)
    }
  }

  if (style) {
    colorStyle = {...colorStyle, ...style}
  }

  return (
    <span className={cls} style={colorStyle} { ...other }>
      { children }
    </span>
  )
}