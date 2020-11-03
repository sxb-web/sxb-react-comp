import React from 'react'
import Icon from '../icon'
import classNames from "../utils/classnames"
import { trimValue, formatValueByGapStep, formatValueByGapRule } from '../utils/format'

export default function Input(props) {
  const {
    label,
    clearable = false,
    children,
    onChange,
    className,
    type = 'text', // 支持 idCard(身份证) bankCard(银行卡) phone(手机号) money(金额) integer(正整数) digit(带小数的数字) 以及其他的标准Html Input类型
    value,
    placeholder,
    disabled = false,
    readOnly = false,
    maxLength,
    virtual = false,
    keyboardType,
    ...other
  } = props

  const cls = classNames("ui-input", className)
  const inputCls = classNames("ui-input_item", {disabled})
  const { _type, _maxLength } = getInputRealType(type, maxLength)

  function changeHandle(e) {
    const _e = {...e}
    const idCardReg = /[^\dXx]/g
    const numberReg = /\D/g
    const digitReg = /[^\d.]/g
    let v = e.target.value
    if (type === 'idCard') {
      v = trimValue(v.replace(idCardReg, ''))
    } else if (type === 'phone' || type === 'bankCard') {
      v = trimValue(v.replace(numberReg, ''))
    } else if (type === 'money') {
      v = trimValue(v.replace(digitReg, ''))
    } else if (type === 'integer') {
      v = trimValue(v.replace(numberReg, ''))
    } else {
      v = trimValue(v)
    }
    if (_maxLength) {
      _e.target.value = v.substring(0, _maxLength)
    }
    onChange(_e)
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
    } else if (type === 'money') {
      const arr = value.split('.')
      const lastFix = arr[1] ? '.' + arr[1] : ''
      return formatValueByGapStep(3, trimValue(arr[0], ','), 'right', ',') + lastFix
    } else if (type === 'integer') {
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
    } else if (type === 'digit' || type === 'integer') {
      return {_type: 'tel', _maxLength: maxLength}
    } else if (type === 'money') {
      return {_type: 'text', _maxLength: maxLength}
    } else if (type === 'phone') {
      return {_type: 'tel', _maxLength: 11}
    } else if (type === 'bankCard') {
      return {_type: 'tel', _maxLength: maxLength}
    } else {
      return {_type: type, _maxLength: maxLength}
    }
  }

  return (
    <div className={cls}>
      {
        label && <div className="ui-input_label">{label}</div>
      }
      <div className="ui-input_control">
        {
          virtual ?
            <div className={`ui-input_format ${(value === null || value === undefined || value === '') && 'placeholder'}`}>{value || placeholder}</div>
            :
            (
              <input
                type={_type}
                value={formatValue(value)}
                readOnly={readOnly}
                disabled={disabled}
                placeholder={placeholder}
                className={inputCls}
                autoComplete="off"
                onChange={changeHandle}
                {...other}
              />
            )
        }
        {(clearable && !readOnly && !disabled && !virtual) && <div className="ui-input_clear"><Icon name="clear" /></div>}
      </div>
      {
        children && <div className="ui-input_right">{children}</div>
      }
    </div>
  )
}
