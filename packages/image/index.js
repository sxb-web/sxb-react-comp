import React from 'react'
import classNames from "../utils/classnames"
import { useMyReducer } from "../utils/hooks"
import LazyLoad from '../lazy-load'

export default function Image(props) {
  const {
    lazy = false,
    scrollContainer = window,
    overflow = false,
    ...other
  } = props

  if (lazy) {
    const _props = {width: props.width, height: props.height, loadingComponent: props.loadingComponent, radius: props.round ? '99999px' : props.radius, relative: true}
    return (
      <LazyLoad
        once
        overflow={overflow}
        scrollContainer={scrollContainer}
        style={{width: props.width || '100%', height: props.height || '100%'}}
        placeholder={<Placeholder {..._props} />}
      >
        <ImageWarp {...other} />
      </LazyLoad>
    )
  }
  return <ImageWarp {...other} />
}

function ImageWarp(props) {
  let {
    width,
    height,
    className,
    src,
    radius,
    round = false,
    fit = 'fill',
    alt,
    style,
    loadingComponent,
    isShowLoading = true,
    isShowError = true,
    errorComponent,
    loading = true,
    error = false,
    onLoad,
    onError,
    ...other
  } = props

  const [state, dispatch] = useMyReducer({
    loading: true,
    error: false,
    loaded: false
  })

  const cls = classNames('ui-image', {'ui-image-round': round}, className)
  let rootStyle = style || {}

  if (width) {
    rootStyle.width = width
  }
  if (height) {
    rootStyle.height = height
  }
  if (radius) {
    rootStyle.borderRadius = radius
  }

  function imageLoad() {
    dispatch({loaded: true, loading: false, error: false})
    onLoad && onLoad()
  }

  function imageError() {
    dispatch({loaded: false, loading: false, error: true})
    onError && onError()
  }

  return (
    <div className={cls} style={rootStyle} {...other}>
      <img
        src={src}
        style={{objectFit: fit}}
        className="ui-image-img"
        alt={alt}
        onLoad={imageLoad}
        onError={imageError}
      />
      {
        !state.loaded && (
          <Placeholder
            loadingComponent={loadingComponent}
            isShowLoading={isShowLoading}
            isShowError={isShowError}
            errorComponent={errorComponent}
            loading={state.loading}
            error={state.error}
          />
        )
      }
    </div>
  )
}

function Placeholder(props) {
  const {
    loadingComponent = <p>加载中</p>,
    isShowLoading = true,
    isShowError = true,
    errorComponent = <p>加载失败</p>,
    loading = true,
    error = false,
    relative = false,
    width = '100%',
    height = '100%',
    radius
  } = props

  const cls = classNames('ui-image-placeholder', {relative})
  const style = relative ? {width, height, borderRadius: radius} : {}
  return (
    <div className={cls} style={style}>
      {
        (isShowLoading && loading) && <>{loadingComponent}</>
      }
      {
        (isShowError && error) && <>{errorComponent}</>
      }
    </div>
  )
}
