import React, { useEffect, useRef } from 'react'
import { raf, cancelRaf } from "../utils"
let rafId
export default function TabsTitle(props) {
  const line = useRef(null)
  const scroller = useRef(null)

  const {
    active = 0,
    list = [],
    threshold = 5,
    children,
    isShowLine = true,
    lineStyle,
    onChange
  } = props

  const isScroll = list.length > threshold

  function changeHandle(index) {
    if (active !== index) {
      onChange(index)
    }
  }

  function animateScrollTo(from, to, scroller) {
    cancelRaf(rafId)
    let count = 0
    const frames = Math.round((0.3 * 1000) / 16)
    function animate() {
      scroller.scrollLeft += (to - from) / frames
      if (++count < frames) {
        rafId = raf(animate)
      }
    }
    animate()
  }

  useEffect(() => {
    if (list.length > 0) {
      const list = scroller.current.childNodes
      if (isShowLine) {
        const distance = Math.floor(list[active].offsetLeft + list[active].offsetWidth / 2 - line.current.offsetWidth / 2)
        line.current.style = `transform: translateX(${distance}px)`
      }
      if (isScroll) {
        let to = list[active].offsetLeft + list[active].offsetWidth / 2 - scroller.current.offsetWidth / 2
        const from = scroller.current.scrollLeft
        animateScrollTo(from, to, scroller.current)
      }
    }
  }, [active])

  return (
    <div className="ui-tabs-title">
      <ul className={isScroll ? 'ui-tabs-title-list ui-tabs-title-list-scroll' : 'ui-tabs-title-list'} ref={scroller}>
        {
          list.map((item, index) => <li className="ui-tabs-title-list-item" key={index} onClick={() => changeHandle(index)}>{children(item, index === active, index)}</li>)
        }
        {
          isShowLine && <div className="ui-scroll-line" ref={line} style={lineStyle} />
        }
      </ul>
    </div>
  )
}