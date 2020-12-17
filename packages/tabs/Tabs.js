import React, { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import Sticky from "../sticky"
import { raf, cancelRaf } from "../utils"

export default function Tabs(props) {
  const {
    active = 0,
    color, // 主题色
    background, // 标题背景色
    lineWidth = '40px',
    lineHeight = '3px',
    sticky = false, // 是否开启粘性布局
    offset, // 开启粘性布局距离顶部距离
    lazy = true, // 是否开启延迟渲染
    children,
    onChange
  } = props


  if (!children) {
    return null
  }

  const titleList = children.map(item => (item.props.title || ''))
  const contentList = children.map(item => (item.props.children || ''))

  return (
    <div className="ui-tabs">
      <HeaderList
        active={active}
        titleList={titleList}
        color={color}
        background={background}
        lineWidth={lineWidth}
        lineHeight={lineHeight}
        sticky={sticky}
        offset={offset}
        onChange={onChange}
      />
      <ContentList active={active} lazy={lazy} list={contentList} />
    </div>
  )
}

let rafId
function HeaderList({titleList, active, color, background, lineWidth, lineHeight, onChange}) {

  const line = useRef(null)
  const scroller = useRef(null)

  const list = titleList.map(item => {
    if (item) {
      return item
    }
  })

  if (list.length < 1) {
    return null
  }

  const isScroll = list.length > 5

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
    const list = scroller.current.firstChild.childNodes
    const distance = Math.floor(list[active].offsetLeft + list[active].offsetWidth / 2 - line.current.offsetWidth / 2)
    line.current.style = `transform: translateX(${distance}px)`
    if (isScroll) {
      let to = list[active].offsetLeft + list[active].offsetWidth / 2 - scroller.current.offsetWidth / 2
      const from = scroller.current.scrollLeft
      animateScrollTo(from, to, scroller.current)
    }
  }, [active])

  return (
    <div className={isScroll ? "ui-tabs-navs-warp  ui-tabs-navs-scroll" : "ui-tabs-navs-warp"} ref={scroller}>
      <div className="ui-tabs-navs">
        {
          list.map((item, index) => (
            <div className={active === index ? 'ui-tabs-nav active' : 'ui-tabs-nav'} key={index} onClick={() => changeHandle(index)}>{item}</div>
          ))
        }
        <div className="ui-tabs-line-warp" ref={line}>
          <div className="ui-tabs-line"  style={{width: lineWidth, height: lineHeight}}></div>
        </div>
      </div>
    </div>
  )
}

function ContentList({active, lazy, list}) {

  const content = useRef(null)
  const cache = useRef(active)

  if (!list) {
    return null
  }

  if (!lazy) {
    return (
      <div className="ui-tabs-content">
        {
          list.map((item, index) => (
            <div className="ui-tabs-content-item" key={index} style={{display: active === index ? 'block' : 'none'}}>{item}</div>
          ))
        }
      </div>
    )
  }

  useEffect(() => {
    const childrenList = content.current.childNodes
    if (childrenList[active].className.indexOf('complete') > -1) {
      childrenList[active].style.display = 'block'
    } else {
      childrenList[active].style.display = 'block'
      childrenList[active].setAttribute('class', childrenList[active].className + ' ' + 'complete' )
      ReactDom.render(list[active], childrenList[active])
    }
    if (cache.current !== active) {
      childrenList[cache.current].style.display = 'none'
      cache.current = active
    }
  }, [active])

  return (
    <div className="ui-tabs-content" ref={content}>
      {
        list.map((item, index) => (
          <div className="ui-tabs-content-item" style={{display: 'none'}} key={index}></div>
        ))
      }
    </div>
  )

}