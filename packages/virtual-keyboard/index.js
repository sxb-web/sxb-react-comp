import React, { useState } from 'react'
const common = new Array(9).fill('').map((item, index) => {
  return {
    disabled: false,
    value: (index + 1).toString()
  }
})
export default function VirtualKeyboard(props) {
  const {
    value = '',
    type = 'number', // idCard， number， digit
    maxlength = 999, // 最长位数
    onInput,
    onChange,
    onConfirm,
    onHide
  } = props

  const [inputValue, setInputValue] = useState(value)

  function confirmHandle() {
    onConfirm && onConfirm(inputValue)
  }

  function hideHandle() {
    onHide && onHide(inputValue)
  }

  function deleteHandle() {
    if (!inputValue) {
      return
    }
    const _v = inputValue.substring(0, inputValue.length - 1) || ''
    setInputValue(_v)
    onInput && onInput(_v)
    onChange && onChange(_v)
  }

  function numberClick(value) {
    let _v = inputValue + value
    if (type === 'number' && _v === '0') {
      return
    }
    if (_v.length <= maxlength) {
      setInputValue(_v)
      onInput && onInput(_v)
      onChange && onChange(_v)
    }
  }

  return (
    <div className="ui-virtual-keyboard">
      <div className="ui-virtual-keyboard-left">
        {
          common.map((item, index) => (
            <div className="ui-virtual-keyboard-item" key={index}>
              <div className="ui-virtual-keyboard-number" onClick={() => numberClick(item.value)}>{item.value}</div>
            </div>
          ))
        }
        <div className="ui-virtual-keyboard-item full">
          <div className="ui-virtual-keyboard-number" onClick={() => numberClick('0')}>0</div>
        </div>
        <div className="ui-virtual-keyboard-item">
          <div className="ui-virtual-keyboard-number" onClick={hideHandle}>
            <img src="https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/stream/vip/keyboard-hide.png" />
          </div>
        </div>
      </div>
      <div className="ui-virtual-keyboard-right">
        <div className="ui-virtual-keyboard-actions">
          <div className="ui-virtual-keyboard-actions-item" onClick={deleteHandle}>
            <img src="https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/stream/vip/keyboard-delete.png" />
          </div>
        </div>
        <div className="ui-virtual-keyboard-actions">
          <div className="ui-virtual-keyboard-actions-item confirm" onClick={confirmHandle}>完成</div>
        </div>
      </div>
    </div>
  )
}