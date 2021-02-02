import React, { useRef, useEffect } from 'react'
import { createDigitReg } from '../utils'
const common = new Array(9).fill('').map((item, index) => {
  return {
    disabled: false,
    value: (index + 1).toString()
  }
})
export default function VirtualKeyboard(props) {
  const inputValue = useRef('')
  const {
    type = 'number', // idCard， number， digit
    control = false, // 是否开启受控模式
    value = '',
    decimal = 2,
    maxLength = 1000,
    confirmText = '完成',
    onInput,
    onConfirm,
    onHide,
    onDelete
  } = props

  function confirmHandle() {
    onConfirm && onConfirm()
  }

  function hideHandle() {
    onHide && onHide()
  }

  function deleteHandle() {
    if (control) {
      if (!inputValue.current) {
        return
      }
      const _v = inputValue.current.substring(0, inputValue.current.length - 1) || ''
      onInput && onInput(_v)
    }
    onDelete && onDelete()
  }

  function numberClick(value) {
    let _v = value
    if (control) {
      _v = inputValue.current + value
      // number idCard 首位字符不能是 '0'
      if ((type === 'number' || type === 'idCard') && _v === '0') {
        return
      }
      // 身份证 开头不能是X 小数点键盘 首字符不能是.
      if ((type === 'idCard' && _v === 'X') || (type === 'digit' && _v === '.')) {
        return
      }
      // 处理小数点的问题
      if (type === 'digit' && _v) {
        if (_v.indexOf('.') < 0) {
          _v = parseFloat(_v).toString().substring(0, maxLength)
        } else {
          _v = _v.replace(/\.{2,}/g, '.') // 只保留第一个.清除多余的
          _v = _v.replace(".","$#$").replace(/\./g,"").replace("$#$",".")
          _v = _v.replace(createDigitReg(decimal),'$1$2.$3')
        }
      }
      // 身份证长度不能超过18位
      if (_v.length > 18 && type === 'idCard') {
        return
      }
      // number不能长于指定maxLength
      if (_v.length > maxLength && type === 'number') {
       return
      }
    }
    onInput && onInput(_v)
  }

  function renderExtraKey(type) {
    if (type === 'number') {
      return null
    }
    if (type === 'digit') {
      return <div className="ui-virtual-keyboard-number" onClick={() => numberClick('.')}>.</div>
    }
    if (type === 'idCard') {
      return <div className="ui-virtual-keyboard-number" onClick={() => numberClick('X')}>x</div>
    }
  }

  useEffect(() => {
    if (control) {
      inputValue.current = (value || '') + ''
    }
  }, [value])

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
        <div className="ui-virtual-keyboard-item">
          { renderExtraKey(type) }
        </div>
        <div className="ui-virtual-keyboard-item full">
          <div className="ui-virtual-keyboard-number" onClick={() => numberClick('0')}>0</div>
        </div>
        <div className="ui-virtual-keyboard-item">
          <div className="ui-virtual-keyboard-number" onClick={hideHandle}>
            <img src="https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/sxb-react-comp/keyboard-hide.png" />
          </div>
        </div>
      </div>
      <div className="ui-virtual-keyboard-right">
        <div className="ui-virtual-keyboard-actions">
          <div className="ui-virtual-keyboard-actions-item" onClick={deleteHandle}>
            <img src="https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/sxb-react-comp/keyboard-delete.png" />
          </div>
        </div>
        <div className="ui-virtual-keyboard-actions">
          <div className="ui-virtual-keyboard-actions-item confirm" onClick={confirmHandle}>{confirmText}</div>
        </div>
      </div>
    </div>
  )
}