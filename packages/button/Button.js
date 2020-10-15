import React from 'react'
import classNames from "../utils/classnames"

export default function Button(props) {
  const {
    tag = 'button',
    type = 'default',
    disabled = false,
    size = 'normal',
    block = false,
    plain = false,
    round = false,
    children,
    className,
    ...other
  } = props

  const Component = tag

  const cls = classNames(
    'ui-btn',
    `ui-btn_${type}`,
    `ui-btn_${size}`,
    {
      'block': block,
      'plain': plain,
      'round': round,
      'disabled': disabled
    },
    className
  )

  function onTouchStart() {}

  return (
    <Component
      {...other}
      disabled={disabled}
      className={cls}
      onTouchStart={onTouchStart}
    >
      {children}
    </Component>
  )
}
