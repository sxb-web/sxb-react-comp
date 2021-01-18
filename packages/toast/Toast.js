import React from 'react'
import Overlay from "../overlay"
import Icon from "../icon"
import Loading from "../loading"
import ReactDOM from "react-dom"

window.toastCurrent = null

function ToastType(props) {
  const root = document.createElement('div')
  let timer = null
  const {
    show = true,
    type = 'text', // 提示类型，可选loading fail success
    message, // 提示文案
    icon, // 自定义图片
    loadingType = 'spinner', // 当类型 为loading 时
    duration = 3000, // 3s 自动关闭 当为0 时需要手动关闭
    position = 'center', // 展示的位置 可选位置 bottom top
  } = props

  this.hide = () => {
    removeRoot()
  }

  function removeRoot() {
    ReactDOM.render(<></>, root)
    window.removeEventListener('popstate', removeRoot)
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  if (duration > 0) {
    timer = setTimeout(() => {
      removeRoot()
    }, duration)
  }

  window.addEventListener('popstate', removeRoot)

  const component = (
    <Overlay
      show={show}
      position={position}
      lockScroll={false}
      isShowLay={false}
      transparent
    >
      <div className={`ui-toast ${position} ${icon ? 'with-icon' : ''}`}>
        { icon && type !== 'loading' && (
          <div className="ui-toast-icon">
            {icon.indexOf('http') > -1 ? <img src={icon} width="30px" height="30px" /> : <Icon name={icon} size={30} />}
          </div>
        )}
        {
          type === 'loading' && <div className="ui-toast-icon"><Loading type={loadingType} color="#fff" size="30" /></div>
        }
        <div className="ui-toast-message">{message}</div>
      </div>
    </Overlay>
  )

  ReactDOM.render(component, root)
}

function helper(props, type) {
  let params
  if (typeof props === 'object') {
    params = {...props, type}
  } else {
    params = {message: props, type}
  }

  if (type === 'success' || type === 'fail') {
    if (!params.icon) {
      params.icon = type
    }
  }

  if (window.toastCurrent) {
    window.toastCurrent.hide()
  }
  window.toastCurrent = new ToastType(params)
  return  window.toastCurrent
}

const Toast = function(props) {
  return helper(props)
}

Toast.loading = function (props) {
  return helper(props, 'loading')
}

Toast.success = function (props) {
  return helper(props, 'success')
}

Toast.fail = function (props) {
  return helper(props, 'fail')
}

export default Toast
