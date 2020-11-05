import React from 'react'
import ReactDOM from 'react-dom'
import Overlay from "../overlay"

function Dialog(props) {
  const {
    show,
    close,
    isShowCancel = true, // 是否显示取消按钮
    confirmText = '确定',
    cancelText = '取消',
    title,
    textAlign = 'left',
    content,
    confirm,
    cancel,
    children
  } = props

  function confirmHandle() {
    close && close()
    confirm && confirm()
  }
  function cancelHandle() {
    close && close()
    cancel && cancel()
  }

  return (
    <Overlay
      show={show}
      closeable={false}
      animation="zoom"
    >
      <div className="ui-dialog">
        { title && <div className="ui-dialog-title">{title}</div> }
        <div className={`ui-dialog-cnt ${textAlign}`}>
          { content && <div className="ui-dialog-content">{content}</div> }
          <div className="ui-dialog-box">{children}</div>
        </div>
        <div className="ui-dialog-actions">
          {isShowCancel && <div className="ui-dialog-cancel" onClick={cancelHandle}>{cancelText}</div>}
          <div className="ui-dialog-confirm" onClick={confirmHandle}>{confirmText}</div>
        </div>
      </div>
    </Overlay>
  )
}

function DialogType(props, type) {
  return new Promise((resolve, reject) => {
    const component = (
      <Dialog
        show={true}
        textAlign="center"
        isShowCancel={type === 'confirm'}
        {...props}
        cancel={cancelHandle}
        confirm={confirmHandle}
      />
    )

    const root = document.createElement('div')
    window.addEventListener('popstate', removeRoot)

    function cancelHandle() {
      removeRoot()
      reject()
    }

    function confirmHandle() {
      removeRoot()
      resolve()
    }

    function removeRoot() {
      ReactDOM.render(React.cloneElement(component, {show: false}), root)
      window.removeEventListener('popstate', removeRoot)
    }
    ReactDOM.render(component, root)
  })
}

Dialog.alert = function (props) {
  return DialogType(props, 'alert')
}

Dialog.confirm = function (props) {
  return DialogType(props, 'confirm')
}

export default Dialog