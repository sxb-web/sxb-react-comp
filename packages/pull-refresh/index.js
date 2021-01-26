import React, { useEffect, useRef } from 'react'
import Loading from "../loading"
import { useMyReducer } from "../utils/hooks"
import { getScrollTop } from "../utils"

export default function PullRefresh(props) {
  const {
    loading = false, // 是否加载中
    disabled = false, // 是否禁用下拉加载
    pullingText = '下拉即可刷新...', // 下拉过程提示文案
    loosingText = '释放即可刷新...', // 释放过程提示文案
    loadingText = '加载中...', // 加载过程提示文案
    headHeight = 50, // 顶部拉取的高度
    animationDuration = 300, // 回弹的动画时间
    children,
    render, // 渲染函数
    refresh
  } = props

  const [state, dispatch] = useMyReducer({
    isPulling: false,
    isLoosing: false,
    isLoading: loading,
    distance: 0
  })

  const track = useRef(null)
  const startY = useRef(0)
  const headStyle = headHeight === 50 ? null : {height: headHeight + 'px'}

  const disabledPull = disabled || loading // 用户不能继续下拉
  function computeDistance(distance) {
    // 当拉出目标高度，就会减缓
    if (distance > 0) {
      if (distance >= headHeight) {
        const _d = Math.round((distance - headHeight) / 2 + headHeight)
        track.current.style = `transform:translate3d(0, ${_d}px, 0);-webkit-transform:-webkit-translate3d(0, ${_d}px, 0)`
        dispatch({isLoosing: true, isLoading: true, isPulling: false, distance: _d })
      } else {
        track.current.style = `transform:translate3d(0, ${distance}px, 0);-webkit-transform:-webkit-translate3d(0, ${distance}px, 0)`
        dispatch({isLoosing: false, isLoading: false, isPulling: true, distance})
      }
    } else {
      track.current.style = ''
      dispatch({isLoosing: false, isLoading: false, isPulling: false, distance: 0})
    }
  }

  function onTouchStart(e) {
    if (disabledPull || getScrollTop(window) !== 0) {
      return
    }
    startY.current = e.pageY || e.clientY || e.touches[0].pageY || e.touches[0].clientY
  }

  function onTouchMove(e) {
    if (disabledPull || getScrollTop(window) !== 0) {
      return
    }
    const distance = (e.pageY || e.clientY || e.touches[0].pageY || e.touches[0].clientY) - startY.current
    if (distance > 0) {
      e.preventDefault()
      e.stopPropagation()
    }
    computeDistance(distance)
  }

  function onTouchEnd() {
    if (disabledPull || getScrollTop(window) !== 0) {
      return
    }
    if (state.distance > 0) {
      if (state.distance >= headHeight) {
        dispatch({isLoosing: false, isLoading: true, isPulling: false, distance: 0})
        refresh && refresh()
      } else {
        track.current.style = `transition-duration:${animationDuration}ms;-webkit-transition-duration:${animationDuration}ms;`
      }
    }
  }

  useEffect(() => {
    if (loading) {
      track.current.style = `transition-duration:${animationDuration}ms;-webkit-transition-duration:${animationDuration}ms;transform:translate3d(0, ${headHeight}px, 0);-webkit-transform:-webkit-translate3d(0, ${headHeight}px, 0)`
    } else {
      track.current.style = `transition-duration:${animationDuration}ms;-webkit-transition-duration:${animationDuration}ms;`
    }
    if (loading !== state.isLoading) {
      dispatch({isLoading: loading})
    }
  }, [loading])

  useEffect(() => {
    track.current.addEventListener('touchstart', onTouchStart, {passive: false})
    track.current.addEventListener('touchmove', onTouchMove, {passive: false})
    track.current.addEventListener('touchcancel', onTouchEnd, {passive: false})
    track.current.addEventListener('touchend', onTouchEnd, {passive: false})
    return () => {
      track.current.removeEventListener('touchstart', onTouchStart, {passive: false})
      track.current.removeEventListener('touchmove', onTouchMove, {passive: false})
      track.current.removeEventListener('touchcancel', onTouchEnd, {passive: false})
      track.current.removeEventListener('touchend', onTouchEnd, {passive: false})
    }
  }, [state.distance])

  return (
    <div className="ui-pull-refresh">
      <div
        ref={track}
        className="ui-pull-refresh-track"
      >
        <div className="ui-pull-refresh-head" style={headStyle}>
          { render ? render(state) : <StatusText status={state} pullingText={pullingText} loosingText={loosingText} loadingText={loadingText} /> }
        </div>
        { children }
      </div>
    </div>
  )
}

function StatusText({ status, pullingText, loosingText, loadingText }) {
  if (status.isPulling) {
    return pullingText
  }
  if (status.isLoosing) {
    return loosingText
  }
  if (status.isLoading) {
    return <Loading type="circular" size="16">{ loadingText }</Loading>
  }
  return null
}