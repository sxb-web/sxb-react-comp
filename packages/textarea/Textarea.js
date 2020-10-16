import React, {useState, useEffect} from 'react'
import Icon from '../icon'
import classNames from "../utils/classnames"

export default function Textarea(props) {
  const [textareaHeight, setTextareaHeight] = useState(50)
  const paddingHeight = 26
  const itemHeight = 24
  const {
    defaultValue,
    value,
    label,
    clearable = false,
    children,
    className,
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

  const cls = classNames("ui-input", className)

  return (
    <div className={cls}>
      {
        label && <div className="ui-input_label">{label}</div>
      }
      <div className="ui-input_control">
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
        {clearable && <div className="ui-input_clear"><Icon name="clear" /></div>}
      </div>
      {
        children && <div className="ui-input_right">{children}</div>
      }
    </div>
  )
}