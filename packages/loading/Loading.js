import React from 'react'

export default function Loading(props) {
  const {
    type = 'spinner', // 仅支持 spinner 和 circular 两种
    vertical = false, // 是否垂直
    size = '30',
    textSize = 14,
    color = '#858B9C',
    children
  } = props

  return (
    <div className={`ui-loading ${vertical ? 'vertical' : ''}`}>
      <div className="ui-loading-icon">
        {
          type === 'spinner' ? <Spinner size={size} color={color}  /> : <Circular size={size} color={color} />
        }
      </div>
      <div className={`ui-loading-cnt ${vertical ? 'vertical' : ''}`} style={{color, fontSize: textSize + 'px'}}>
        { children }
      </div>
    </div>
  )
}

function Spinner({size, color}) {

  const spinners = []

  for (let i = 0; i < 12; i++) {
    spinners.push(<i key={i} />)
  }

  return (
    <div className="ui-loading-spinner" style={{color, width: size + 'px', height: size + 'px'}}>
      { spinners }
    </div>
  )
}

function Circular({size, color}) {

  const DIAMETER = 50

  return (
    <div className="ui-loading-circular" style={{color, width: size + 'px', height: size + 'px'}}>
      <svg viewBox={`${DIAMETER / 2} ${DIAMETER / 2} ${DIAMETER} ${DIAMETER}`}>
        <circle cx={DIAMETER} cy={DIAMETER} r={20} fill="none" />
      </svg>
    </div>
  )
}

