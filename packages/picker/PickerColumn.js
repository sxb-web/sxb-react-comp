import React, { useEffect, useRef } from 'react'
import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'
BScroll.use(Wheel)

export default function PickerColumn(props) {

  const wrapper = useRef(null)
  const BS = useRef(null)

  const {
    list = [],
    activeIndex = 0,
    onChange
  } = props

  function init() {
    BS.current = new BScroll(wrapper.current, {
      wheel: {
        wheelWrapperClass: 'ui-picker-column-list',
        wheelItemClass: 'ui-picker-column-item',
        rotate: 0,
        adjustTime: 400,
        selectedIndex: activeIndex,
        wheelDisabledItemClass: 'wheel-disabled-item'
      }
    })
    BS.current.on('wheelIndexChanged', index => {
      onChange && onChange(index)
    })
  }

  useEffect(() => {
    let time
    if (list && list.length > 0) {
      time = setTimeout(() => {
        init()
        clearTimeout(time)
      }, 16)
    }
    return () => {
      BS.current && BS.current.destroy()
      time && clearTimeout(time)
    }
  }, [])

  if (!list || list.length === 0) {
    return null
  }

  return (
    <div className="ui-picker-column">
      <div className="ui-picker-column-mask" />
      <div className="ui-picker-column-line" />
      <div className="ui-picker-column-wheel" ref={wrapper}>
        <ul className="ui-picker-column-list">
          {
            list.map((item, index) => (
              <li className={`ui-picker-column-item ${item.disabled ? 'wheel-disabled-item' : ''}`} key={index}>{item.text}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}