import React, {useEffect, useState, useRef} from 'react'
import { getScrollTop, getRootScrollTop, getVisibleHeight } from "../utils"

export default function Sticky(props) {
  const {
    disabled = false,
    offset = 0,
    zIndex = 99,
    container = null,
    scroll,
    children
  } = props

  const [isFixed, setIsFixed] = useState(false)
  const [height, setHeight] = useState(0)
  const [transform, setTransform] = useState(offset)
  const root = useRef(null)

  function onScroll() {
    if (!root.current || disabled) {
      return
    }
    const scrollTop = getRootScrollTop()
    const rootTop = root.current.getBoundingClientRect().top
    let fixed = rootTop < offset
    if (container) {
      const rh = root.current.offsetHeight
      const containerBottom = container.getBoundingClientRect().bottom
      if (containerBottom <= rh + offset) {
        setTransform(containerBottom - rh)
      } else {
        setTransform(offset)
      }
    }
    setIsFixed(fixed)
    scroll && scroll({scrollTop, isFixed: fixed})
  }

  useEffect(() => {
    setHeight(root.current.offsetHeight || 0)
  }, [])

  useEffect(() => {
    if (!disabled) {
      window.addEventListener('scroll', onScroll, false)
      return () => {
        window.removeEventListener('scroll', onScroll, false)
      }
    }
  }, [container])


  return (
    <div ref={root} style={{height: isFixed ? height + 'px' : 'auto'}}>
      <div className={`ui-sticky ${isFixed ? 'ui-sticky-fixed' : ''}`} style={createStyle(isFixed, transform, zIndex)}>
        { children }
      </div>
    </div>
  )
}

function createStyle(isFixed, transform, zIndex) {
  if (isFixed) {
    return {top: transform + 'px', zIndex}
  } else {
    return null
  }
}