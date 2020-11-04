import React from "react";

export default function Animation(props) {
  const {
    className,
    duration = 200,
    name = 'fade', // 动画名称
    show = false,
    children,
    onAnimationEnd,
    ...other
  } = props

  return (
    <div
      className={`${className} ui-animation ui-${name}-${show ? 'in' : 'out'}`}
      style={{animationDuration: duration + 'ms', WebkitAnimationDuration: duration + 'ms'}}
      onAnimationEnd={onAnimationEnd}
      {...other}
    >
      { children }
    </div>
  )

}