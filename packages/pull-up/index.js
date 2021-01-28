import React, { useEffect, useRef } from 'react'
import BScroll from "@better-scroll/core"
import classNames from "../utils/classnames"
import { getRootScrollTop, isHidden } from '../utils'
import Loading from "../loading"
import { useDebounce } from "../utils/hooks"

function PullUp(props) {
  const wrapper = useRef(null)
  const BS = useRef(null)
  const {
    loading = false,
    loadingText = '加载中...',
    finished = false,
    list,
    finishedText = '没有更多了',
    emptyText = '暂无数据',
    emptyComponent,
    error = false,
    errorText = '请求失败，点击重新加载',
    immediateCheck = true, // 初始化是否自动加载
    offset = 50,
    children,
    height,
    load,
    className,
    style,
    loaderComponent,
    ...other
  } = props

  const cls = classNames('ui-pull-up', className)
  const containerStyle = {
    ...style
  }
  if (height) {
    containerStyle.height = height
  }

  const scrollHandle = useDebounce(() => {
    if (loading || finished || error || !load || isHidden(wrapper.current)) {
      return
    }
    const scrollTop = getRootScrollTop()
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    if (scrollHeight - scrollTop - clientHeight - offset <= 0) {
      load && load()
    }
  }, 100)

  const scrollEnd = useDebounce((scrollTop) => {
    if (loading || finished || error || !load || isHidden(wrapper.current)) {
      return
    }
    const scrollHeight = wrapper.current.children[0].clientHeight
    const clientHeight = wrapper.current.clientHeight
    if (scrollHeight - clientHeight - offset + scrollTop <= 0) {
      load && load()
    }
  }, 10)

  function renderStatus() {
    if (error) {
      return <div className="ui-pull-up-message" onClick={load}>{ errorText }</div>
    }
    if (finished) {
      if (list && list.length === 0) {
        return emptyComponent || <div className="ui-pull-up-message">{ emptyText }</div>
      } else {
        return <div className="ui-pull-up-message">{ finishedText }</div>
      }
    }
    return loaderComponent ? loaderComponent() : <Loading type="circular" size="14">{loadingText}</Loading>
  }

  useEffect(() => {
    if (immediateCheck) {
      load && load()
    }
  }, [])

  useEffect(() => {

    if (!height) {
      // js window 滚动
      window.addEventListener('scroll', scrollHandle, true)
    } else {
      // 固定高度的滚动
      BS.current = new BScroll(wrapper.current, {
        scrollX: false,
        scrollY: true,
        click: true
      })

      BS.current.on('scrollEnd', (pos) => {
        scrollEnd(pos.y)
      })
    }
    return () => {
      BS.current && BS.current.destroy()
      if (!height) {
        window.removeEventListener('scroll', scrollHandle, true)
      }
    }
  }, [])

  useEffect(() => {
    if (BS.current) {
      BS.current.refresh()
    }
  }, [children])

  return (
    <div className={ cls } style={containerStyle} {...other}>
      <div className="ui-pull-up-wrapper" ref={wrapper}>
        <div className="ui-pull-up-content">
          { children }
          <div className="ui-pull-up-status">
            { renderStatus() }
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PullUp)