import React, { useRef, useEffect } from 'react'

const defaultSrc = 'https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/default.png'
const failSrc = 'https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/fail.png'
const defaultClass = 'ui-image'
let imgObserver

function initImgObserver() {
  return new IntersectionObserver(entries => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        item.target.src = item.target.dataset.src
        item.target.style.objectFit = item.target.dataset.fit
        item.target.removeAttribute('data-src')
        item.target.removeAttribute('data-fit')
        imgObserver.unobserve(item.target) // cancel observer
      }
    })
  })
}

function setUpObserve(target) {
  if (!imgObserver) {
    imgObserver = initImgObserver()
  }
  imgObserver.observe(target.current)
}

function cancelObserve(target) {
  imgObserver.unobserve(target.current)
}

export default function Image(props) {
  const _self = useRef(null)

  let {
    className,
    src = defaultSrc,
    fit = 'contain',
    lazy,
    style = {},
    ...other
  } = props

  // resolve class
  className = className ? defaultClass + ' ' + className : defaultClass

  // resolve lazy state
  if (lazy) {
    other['data-fit'] = fit
    other['data-src'] = src
    src = defaultSrc
  } else {
    // resolve style
    style.objectFit = fit
  }


  useEffect(function () {
    if (props.lazy) {
      setUpObserve(_self)
      return () => {
        cancelObserve(_self)
      }
    }
  }, [])

  function fail() {
    _self.current.src = failSrc
  }

  return (
    <img
      ref={_self}
      className={className}
      src={src}
      style={style}
      onError={fail}
      {...other}
    />
  )
}
