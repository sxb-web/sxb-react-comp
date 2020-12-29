import React from 'react'
import Overlay from "../overlay"

const presetIcons = [ 'wechat', 'weibo', 'link', 'poster', 'qrcode', 'weapp-qrcode', 'qq' ] // 预设的icon

export default function ShareSheet(props) {
  const {
    show = false,
    options = [],
    title = '立即分享给好友',
    cancelText,
    description,
    close,
    onClick
  } = props

  const realOptions = getRealOptions(options)

  return (
    <Overlay
      show={show}
      close={close}
      position="bottom"
      animation="slide-up"
    >
      <div className="ui-share-sheet">
        <div className="ui-share-sheet-header">
          <div className="ui-share-sheet-title">{ title }</div>
          {
            description && <div className="ui-share-sheet-desc">{ description }</div>
          }
        </div>
        <div className="ui-share-sheet-container">
          {
            realOptions.map((item, index) => (
              <div className="ui-share-sheet-scroller" key={index}>
                {
                  item.map((menu, i) => (
                    <div className="ui-share-sheet-item" key={i} onClick={() => onClick(menu)}>
                      <div className="ui-share-sheet-icon" style={{backgroundImage: 'url('+ getUrl(menu.icon) +')'}}></div>
                      <div className="ui-share-sheet-name">{menu.name}</div>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
        {
          cancelText && (
            <div className="ui-share-sheet-cancel" onClick={close}>
              <div className="ui-share-sheet-cancel-btn">{ cancelText }</div>
            </div>
          )
        }
      </div>
    </Overlay>
  )
}

function getUrl(icon) {
  if (presetIcons.indexOf(icon) > -1) {
    return `https://img.yzcdn.cn/vant/share-icon-${icon}.png`
  } else {
    return icon
  }
}

function getRealOptions(options) {
  if (options.length === 0) {
    return [[]]
  } else if (options[0] instanceof Array) {
    return options
  } else {
    return [options]
  }
}


