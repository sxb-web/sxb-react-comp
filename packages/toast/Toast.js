import React from 'react'
import Overlay from "../overlay"
import Icon from "../icon"
import Loading from "../loading"
import ReactDOM from "react-dom"

window.toastCurrent = null

function ToastType(props) {
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

  if (window.toastCurrent) {
    ReactDOM.render(<></>, window.toastCurrent)
  }

  function removeRoot() {
    ReactDOM.render(React.cloneElement(component, {show: false}), root)
    window.toastCurrent = null
    window.removeEventListener('popstate', removeRoot)
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  const root = document.createElement('div')
  window.toastCurrent = root
  let timer = null
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

const Toast = function(props) {
  if (typeof props === 'object') {
    return new ToastType(props)
  }
  return new ToastType({message: props})
}

Toast.loading = function (props) {
  if (typeof props === 'object') {
    return new ToastType({type: 'loading', ...props})
  }
  return new ToastType({type: 'loading', message: props})
}

Toast.success = function (props) {
  if (typeof props === 'object') {
    return new ToastType({type: 'success', icon: 'success', ...props})
  }
  return new ToastType({type: 'success', icon: 'success', message: props})
}

Toast.fail = function (props) {
  if (typeof props === 'object') {
    return new ToastType({type: 'fail', icon: 'fail', ...props})
  }
  return new ToastType({type: 'fail', icon: 'fail', message: props})
}

export default Toast
