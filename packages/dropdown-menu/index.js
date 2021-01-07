import React, { useRef } from 'react'
import Overlay from "../overlay"
import Cell from "../cell"
import Icon from '../icon'
import { useMyReducer } from "../utils/hooks"

export default function DropdownMenu(props) {
  const {
    title = '测试标题',
    disabled = false,
    value,
    actions,
    children
  } = props

  const root = useRef(null)

  const [state, dispatch] = useMyReducer({
    show: false,
    maskTop: 0,
    currentIndex: 0,
    childrenContext: null
  })

  function clickHandle() {
    if (disabled) {
      return
    }
    dispatch({maskTop: root.current.getBoundingClientRect().bottom, show: true})
  }

  function renderChildren() {
    if (actions) {
      return (
        <div>
          {
            actions.map((item, index) => <Cell key={index} title={item.text} link={false} value={1} />)
          }
        </div>
      )
    } else if (children) {
      return children
    } else {
      return null
    }
  }

  return (
    <div className="ui-dropdown-menu" ref={root}>
      <div className="ui-dropdown-menu-nav" onClick={clickHandle}>
        <div className="ui-dropdown-menu-title">{title}</div>
      </div>
      <Overlay
        show={state.show}
        position="top"
        animation="slide-down"
        close={() => dispatch({show: false})}
        rootStyle={{top: state.maskTop + 'px'}}
      >
        <div className="ui-dropdown-menu-cnt">
          { renderChildren() }
        </div>
      </Overlay>
    </div>
  )
}