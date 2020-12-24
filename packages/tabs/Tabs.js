import React, { useEffect, useRef, useState } from 'react'
import ReactDom from 'react-dom'
import Sticky from "../sticky"
import { raf, cancelRaf } from "../utils"

export default function Tabs(props) {

  const [node, setNode] = useState(null)

  const root = useRef(null)

  const {
    active = 0,
    background, // 标题背景色
    lineColor,
    lineWidth = '40px',
    lineHeight = '3px',
    threshold = 5, // 滚动阈值
    sticky = false, // 是否开启粘性布局
    offset, // 开启粘性布局距离顶部距离
    zIndex,
    lazy = true, // 是否开启延迟渲染
    children,
    onClick,
    onChange,
    onScroll
  } = props

  if (!children) {
    return null
  }

  const titleList = children.map(item => (item.props.title || ''))

  useEffect(() => {
    if (sticky) {
      setNode(root.current)
    }
  }, [])

  return (
    <div className="ui-tabs" ref={root}>
      <Sticky
        disabled={!sticky}
        offset={offset}
        zIndex={zIndex}
        scroll={onScroll}
        container={node}
      >
        <HeaderList
          active={active}
          threshold={threshold}
          titleList={titleList}
          lineColor={lineColor}
          background={background}
          lineWidth={lineWidth}
          lineHeight={lineHeight}
          onChange={onChange}
          onClick={onClick}
        />
      </Sticky>
      <ContentList active={active} lazy={lazy} list={children} />
    </div>
  )
}

let rafId
function HeaderList({titleList, threshold, active, lineColor, background, lineWidth, lineHeight, onChange, onClick}) {

  const line = useRef(null)
  const scroller = useRef(null)
  const scrollerStyle = background && {background}
  const lineStyle = {width: lineWidth, height: lineHeight}
  if (lineColor) {
    lineStyle.backgroundColor = lineColor
  }

  const list = titleList.filter(item => item)

  if (list.length !== titleList.length) {
    return null
  }

  const isScroll = list.length > threshold

  function changeHandle(index) {
    onClick && onClick({index, name:   list[index]})
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
    <div className={isScroll ? "ui-tabs-navs-warp  ui-tabs-navs-scroll" : "ui-tabs-navs-warp"} ref={scroller} style={scrollerStyle}>
      <div className="ui-tabs-navs">
        {
          list.map((item, index) => (
            <div className={active === index ? 'ui-tabs-nav active' : 'ui-tabs-nav'} key={index} onClick={() => changeHandle(index)}>{item}</div>
          ))
        }
        <div className="ui-tabs-line-warp" ref={line}>
          <div className="ui-tabs-line"  style={lineStyle}></div>
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