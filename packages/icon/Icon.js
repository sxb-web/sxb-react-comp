import React from 'react'
export default function Icon(props) {
  const {
    color = '',
    size = '14px',
    name = '',
    style = {},
    ...other
  } = props

  const styleC = {fontSize: size, ...style}

  if (color) {
    styleC.color = color
  }

  return (
    <i className={`ui-icon ui-icon-${name}`} style={styleC} {...other} />
  )
}