import React, { useRef, useEffect, useState } from 'react'
import BScroll from "@better-scroll/core"
import Slide from '@better-scroll/slide'
BScroll.use(Slide)

const Swipe = React.forwardRef((props, ref) => {

  const wrapper = useRef(null)
  const BS = ref || useRef(null)

  const {
    autoplay = true,
    duration = 500,
    interval = 3000,
    initialIndex = 0,
    width,
    height,
    loop = true,
    showIndicators = true,
    vertical = false,
    touchable = true,
    onChange,
    threshold = 0.1,
    renderIndicators,
    children
  } = props

  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  if (!children) {
    return null
  }

  const childrenList = children.length > 0 ? children : [children]
  let rootStyle = null
  if (width || height) {
    rootStyle = {width: width || '100%', height: height || '100%'}
  }

  useEffect(() => {
    BS.current = new BScroll(wrapper.current, {
      scrollX: !vertical,
      scrollY: vertical,
      momentum: false,
      bounce: false,
      stopPropagation: false,
      eventPassthrough: vertical ? 'horizontal' : 'vertical',
      slide: {
        loop,
        threshold,
        speed: duration,
        listenFlick: false,
        autoplay,
        interval,
      }
    })
    // 重写 slide 方法
    BS.current.slideTo = function(index, animate = true) {
      BS.current.goToPage(vertical ? 0 : index, vertical ? index : 0, animate ? duration : 0)
    }
    BS.current.getCurrentSlide = function() {
      const page = BS.current.getCurrentPage()
      return vertical ? page.pageY : page.pageX
    }
    // 监听slide change
    BS.current.on('slidePageChanged', (page) => {
      const index = vertical ? page.pageY : page.pageX
      setCurrentIndex(index)
      onChange && onChange({...page, index})
    })
    // 默认跳转到initialIndex
    if (initialIndex > 0) {
      BS.current.slideTo(initialIndex, false)
    }
    return () => {
      BS.current && BS.current.destroy()
    }
  }, [])

  return (
    <div className="ui-swipe" style={rootStyle}>
      <div className="ui-swipe-wrapper" ref={wrapper}>
        <ul className={`ui-swipe-content ${vertical ? 'vertical' : ''}`}>
          {
            childrenList.map((item, index) => <li className="ui-swipe-item" key={index}>{item}</li>)
          }
        </ul>
      </div>
      { !touchable && <div className="ui-swipe-mask" /> }
      {
        showIndicators && (
          <>
            {
              renderIndicators ? renderIndicators(currentIndex) : (
                <div className={`ui-swipe-dots  ${vertical ? 'vertical' : ''}`}>
                  {
                    childrenList.map((item, index) => ( <span className={`ui-swipe-dots-item ${currentIndex === index ? 'active' : ''}`} key={index} /> ))
                  }
                </div>
              )
            }
          </>
        )
      }
    </div>
  )
})

export default Swipe