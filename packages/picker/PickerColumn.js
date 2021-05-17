import React, { useEffect, useRef } from 'react'
import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'
BScroll.use(Wheel)

function PickerColumn(props) {

  const wrapper = useRef(null)
  const BS = useRef(null)

  const {
    list = [],
    activeIndex = 0,
    isRelation = true,
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
    if (BS.current) {
      BS.current.refresh()
    } else {
      if (list.length > 0) {
        init()
      }
    }
  }, [list])

  useEffect(() => {
    if (BS.current) {
      if (isRelation) {
        BS.current.wheelTo(activeIndex)
      }
    }
  }, [activeIndex])

  useEffect(() => {
    return () => {
      BS.current && BS.current.destroy()
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

export default PickerColumn