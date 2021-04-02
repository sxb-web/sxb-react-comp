import React from 'react'

export default function ResultPage(props) {
  const {
    type = 'empty', // error search empty wechat
    icon,
    title,
    description = '描述文字',
    children,
    ...other
  } = props

  const poster = icon || `https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/petrol-station/icon/${type}.png`

  return (
    <div className="ui-result-page" {...other}>
      <img className="ui-result-page-img" src={poster} />
      {title && <div className="ui-result-page-title">{title}</div>}
      <div className="ui-result-page-description">{description}</div>
      {children}
    </div>
  )
}