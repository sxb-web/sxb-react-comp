import React, {useState, useEffect} from 'react'
import Icon from '../icon'
import classNames from "../utils/classnames"

export default function Input(props) {
  const {
    label,
    textarea = false,
    clearable = false,
    children,
    onChange,
    className,
    ...otherProps
  } = props

  function changeHandle(e) {
    console.log(e.target.value)
  }

  const cls = classNames("ui-input", className)

  return (
    <div className={cls}>
      {
        label && <div className="ui-input_label">{label}</div>
      }
      <div className="ui-input_control">
        {
          textarea ? <TextareaCom onChange={changeHandle} {...otherProps} /> : <InputCom onChange={changeHandle} {...otherProps} />
        }
        {clearable && <div className="ui-input_clear"><Icon name="clear" /></div>}
      </div>
      {
        children && <div className="ui-input_right">{children}</div>
      }
    </div>
  )
}

function TextareaCom(props) {
  const [textareaHeight, setTextareaHeight] = useState(50)
  const paddingHeight = 26
  const itemHeight = 24
  const {
    defaultValue,
    value,
    disabled = false,
    rows = 1,
    autoHeight = false,
    placeholder,
    readOnly,
    maxLength,
    onChange
  } = props

  useEffect(() => {
    if (!autoHeight) {
      setTextareaHeight(rows * itemHeight + paddingHeight)
    }
  }, [])

  return (
    <textarea
      defaultValue={defaultValue}
      value={value}
      rows={autoHeight ? 1 : rows}
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readOnly}
      maxLength={maxLength}
      style={{height: textareaHeight}}
      className="ui-input_item"
    />
  )
}

function InputCom(props) {
  const {
    type = 'text',
    value,
    defaultValue,
    placeholder,
    disabled = false,
    readOnly = false,
    maxLength,
    clearable = false,
    virtual = false,
    onChange,
    ...other
  } = props

  return (
    <input
      defaultValue={defaultValue}
      type={type}
      value={value}
      readOnly={readOnly}
      maxLength={maxLength}
      placeholder={placeholder}
      className="ui-input_item"
      {...other}
    />
  )
}