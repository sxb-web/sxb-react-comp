import React, { useEffect, useRef, useState } from 'react'
import ReactDom from 'react-dom'
import Sticky from "../sticky"
import TabsTitle from "../tabs-title"

export default function Tabs(props) {

  const [node, setNode] = useState(null)

  const root = useRef(null)

  const {
    active = 0,
    threshold = 5,
    isShowLine = true,
    lineStyle,
    lineClass,
    leftSlot,
    rightSlot,
    background, // 标题背景色
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
