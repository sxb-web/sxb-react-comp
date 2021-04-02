import React from 'react'
import classNames from "../utils/classnames"
import { useMyReducer } from "../utils/hooks"
import Icon from '../icon'

const defaultSrc = 'https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/default.png'
const failSrc = 'https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/fail.png'

export default function Image(props) {
  let {
    width,
    height,
    className,
    src,
    round = false,
    fit,
    lazy = false,
    alt,
    loadingIcon = defaultSrc,
    isShowLoading = true,
    isShowError = true,
    errorIcon = failSrc,
    style,
    ...other
  } = props

  const [state, dispatch] = useMyReducer({
    loading: true,
    error: false
  })

  const cls = classNames('ui-image', {'ui-image-round': round}, className)
  let rootStyle = style || {}
  if (width) {
    rootStyle.width = width
  }
  if (height) {
    rootStyle.height = height
  }

  function imgLoad() {
    dispatch({loading: false})
  }

  function imgFail() {
    dispatch({loading: false})
  }

  return (
    <div className={cls} style={rootStyle} {...other}>
      <img
        src={src}
        style={{objectFit: fit}}
        className="ui-image-img"
        alt={alt}
        onLoad={imgLoad}
        onError={imgFail}
      />
      <Placeholder
        loadingIcon={loadingIcon}
        isShowLoading={isShowLoading}
        isShowError={isShowError}
        errorIcon={errorIcon}
        loading={state.loading}
        error={state.error}
      />
      {
        (state.loading || state.error) && (
          <div className="ui-image-placeholder">

          </div>
        )
      }
    </div>
  )
}

function Placeholder({loadingIcon, isShowLoading, isShowError, errorIcon, loading, error}) {

}
