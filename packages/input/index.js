import React from 'react'
import Icon from '../icon'
import classNames from "../utils/classnames"
import { trimValue, formatValueByGapStep, formatValueByGapRule } from '../utils/format'
import { createDigitReg } from '../utils'

export default function Input(props) {
  const {
    label,
    type = 'text', // idCard(身份证) bankCard phone number digit(带小数的数字) textarea
    border = true,
    value,
    required = false,
    decimal = 2,
    placeholder,
    clearable = false,
    isFormat = false,
    children,
    className,
    disabled = false,
    readOnly = false,
    maxLength = 9999,
    labelWidth,
    align = '',
    onChange,
    ...other
  } = props

  const cls = classNames("ui-input", {'ui-input-border': border}, className)
  const inputCls = classNames("ui-input_item", { disabled }, align)
  const { _type, _maxLength } = getInputRealType(type, maxLength)
  let labelStyle
  if (labelWidth && labelWidth > 0) {
    labelStyle = {width: labelWidth + 'px'}
  }

  // 组件内部事件对象 返回给客户端
  const event = { value }
  if (props.name) {
    event.name = props.name
  }

  function changeHandle(e) {
    const idCardReg = /[^\dXx]/g
    const numberReg = /[^0-9]/g
    const digitReg = /[^\d.]/g
    let v = e.target.value

    // 对特殊类型进行输入过滤
    if ((type === 'idCard' || type === 'bankCard' || type === 'phone') && v === '0') {
      return
    }
    if (type === 'digit' && (v === '.' || v === '00' || v === '..')) {
      return
    }

    switch (type) {
      case 'idCard': // 身份证处理
        v = trimValue(v.replace(idCardReg, '')).toUpperCase()
        break
      case 'phone': // 电话处理
        v = trimValue(v.replace(numberReg, ''))
        break
      case 'bankCard': // 银行卡
        v = trimValue(v.replace(numberReg, ''))
        break
      case 'number': // 数字处理
        v = trimValue(v.replace(numberReg, ''))
        break
      case 'digit':
        v = decimal > 0 ? trimValue(v.replace(digitReg, '')) : trimValue(v.replace(numberReg, ''))
        if (v) {
          if (v.indexOf('.') < 0) {
            v = parseFloat(v).toString().substring(0, _maxLength)
          } else {
            v = v.replace(/\.{2,}/g, '.') // 只保留第一个.清除多余的
            v = v.replace(".","$#$").replace(/\./g,"").replace("$#$",".")
            v = v.replace(createDigitReg(decimal),'$1$2.$3')
            const _array = v.split('.')
            const pre = parseFloat(_array[0]).toString().substring(0, _maxLength)
            v = pre + '.' + _array[1]
          }
        }
        break
      default:
        v = trimValue(v)
        break
    }

    if (_maxLength && type !== 'digit') {
      event.value = v.substring(0, _maxLength)
    } else {
      event.value = v
    }
    onChange(event)
  }

  // 清除
  function clearOut() {
    onChange({...event, value: ''})
  }

  // 对value 进行 format
  function formatValue(value) {
    if (!value) {
      return ''
    }
    if (type === 'idCard') {
      return formatValueByGapRule('3|3|4|4|4', trimValue(value))
    } else if (type === 'bankCard') {
      return formatValueByGapStep(4, trimValue(value))
    } else if (type === 'digit') {
      const arr = value.split('.')
      const lastFix = arr[1] ? '.' + arr[1] : (value.indexOf('.') > -1 ? '.' : '')
      return formatValueByGapStep(3, trimValue(arr[0], ','), 'right', ',') + lastFix
    } else if (type === 'number') {
      return trimValue(value)
    } else if (type === 'phone') {
      return formatValueByGapRule('3|4|4', trimValue(value))
    } else {
      return trimValue(value)
    }
  }

  // 根据类型 赋予input 合规的type 类型
  function getInputRealType(type, maxLength) {
    if (type === 'idCard') {
      return {_type: 'text', _maxLength: 18}
    } else if (type === 'digit' || type === 'number' || type === 'bankCard') {
      return {_type: 'tel', _maxLength: maxLength}
    } else if (type === 'phone') {
      return {_type: 'tel', _maxLength: 11}
    } else {
      return {_type: type, _maxLength: maxLength}
    }
  }

  function formatHandle(v) {
    if (isFormat) {
      return formatValue(v)
    } else {
      return v
    }
  }

  return (
    <div className={cls}>
      {
        label && (
          <div className="ui-input_label" style={labelStyle}>
            <div className={required ? 'ui-input-label-name required' : 'ui-input-label-name'}>{label}</div>
          </div>
        )
      }
      <div className="ui-input_control">
        <input
          type={_type}
          value={formatHandle(value)}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          className={inputCls}
          autoComplete="off"
          onChange={changeHandle}
          {...other}
        />
        {(clearable && !readOnly && !disabled && value) && <div className="ui-input_clear" onMouseDown={clearOut}><Icon name="clear" /></div>}
      </div>
      {
        children && <div className="ui-input_right">{children}</div>
      }
    </div>
  )
}
