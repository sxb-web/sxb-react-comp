import React, {useState, useEffect} from 'react'
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
  const {_type, _maxlength} = getInputRealType(type, maxLength)


  function changeHandle(e) {
    const v = e.target.value
  }

  // 对value 进行 format
  function formatValue(value) {
    if (!value) {
      return ''
    }
    if (type === 'idCard') {
      return formatValueByGapRule('6|8|4', trimValue(value))
    } else if (type === 'bankCard') {
      return formatValueByGapStep(4, trimValue(value))
    } else if (type === 'money') {
      return formatValueByGapStep(3, trimValue(value, ','), 'right', ',')
    } else if (type === 'phone') {
      return formatValueByGapRule('3|4|4', trimValue(value))
    } else {
      return trimValue(value)
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

// 根据类型 赋予input 合规的type 类型
function getInputRealType(type, maxLength) {
  if (type === 'idCard') {
    return {_type: 'text', _maxLength: 18}
  } else if (type === 'money' || type === 'digit') {
    return {_type: 'number', _maxLength: maxLength}
  } else if (type === 'bankCard' || type === 'integer') {
    return {_type: 'tel', _maxLength: maxLength}
  } else if (type === 'phone') {
    return {_type: 'tel', _maxLength: 11}
  } else {
    return {_type: type, _maxLength: maxLength}
  }
}