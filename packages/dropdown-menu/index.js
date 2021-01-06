import React from 'react'

export default function DropdownMenu(props) {

  const {
    children
  } = props

  return (
    <div className="ui-dropdown-menu">
      { children }
    </div>
  )
}