import React from 'react'
import classNames from "../utils/classnames"
export const gutterContext = React.createContext(0)
export default function Row(props) {

  const  {
    type,
    gutter = 0,
    justify = 'flex-start',
    align = 'flex-start',
    className,
    style,
    children,
    ...other
  } = props

  const alignName = align ? `ui-row-align-${align}` : null
  const justifyName = justify ? `ui-row-justify-${justify}` : null
  const cls = classNames('ui-row', alignName, justifyName, className)
  const stl = style || {}

  return (
    <div className={cls} style={stl} { ...other }>
      <gutterContext.Provider value={gutter}>
        { children }
      </gutterContext.Provider>
    </div>
  )
}