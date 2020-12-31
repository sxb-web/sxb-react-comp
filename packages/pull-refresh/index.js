import React, { useEffect, useRef } from 'react'
import Loading from "../loading"

export default function PullRefresh(props) {
  const {
    disabled = false,
    headHeight = 50, // 顶部拉取的高度
    children,
    refresh
  } = props

  const track = useRef(null)
  const position = useRef({startY: 0, distance: 0})

  function onTouchStart(e) {
    position.current.startY = e.pageY || e.clientY || e.touches[0].pageY || e.touches[0].clientY
  }

  function onTouchMove(e) {
    const distance = (e.pageY || e.clientY || e.touches[0].pageY || e.touches[0].clientY) - position.current.startY
    position.current.distance = distance
    // 当拉出目标高度，就会减缓
    if (distance >= 0) {
      if (distance > headHeight) {
        const _d = Math.round((distance - headHeight) / 2 + headHeight)
        track.current.style = `transform:translate3d(0, ${_d}px, 0)`
      } else {
        track.current.style = `transform:translate3d(0, ${distance}px, 0)`
      }
    } else {
      track.current.style = ''
    }
  }

  function onTouchEnd() {
    if (position.current.distance > 0) {
      if (position.current.distance >= headHeight) {
        track.current.style = `transition-duration: 300ms;transform:translate3d(0, ${headHeight}px, 0)`
      } else {
        track.current.style = `transition-duration: 300ms;`
      }
    }
  }

  useEffect(() => {

  }, [])

  return (
    <div className="ui-pull-refresh">
      <div
        className="ui-pull-refresh-track"
        ref={track}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <div className="ui-pull-refresh-head">
          <Loading type="circular" size="20">正在加载中...</Loading>
        </div>
        { children }
      </div>
    </div>
  )
}