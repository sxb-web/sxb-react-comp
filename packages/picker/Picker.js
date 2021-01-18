import React, { useEffect, useRef } from 'react'
import Overlay from "../overlay"
import PickerColumn from './PickerColumn'
import { useMyReducer } from "../utils/hooks"

export default function Picker(props) {
  const cache = useRef(null)
  const {
    show = false,
    defaultActive = 0,
    columns = [],
    title = '',
    confirmText = '确定',
    cancelText = '取消',
    close,
    onCancel,
    onConfirm,
    onChange
  } = props

  const [state, dispatch] = useMyReducer({
    list: []
  })

  function pickerColumnChange(index) {
    cache.current = { value: state.list[index].value, index }
    onChange && onChange(state.list[index].value, index)
  }

  function cancelHandle() {
    close && close()
    onCancel && onCancel()
  }

  function confirmHandle() {
    close && close()
    if (!cache.current) {
      onConfirm && onConfirm(state.list[defaultActive].value, state.list[defaultActive].index)
    } else {
      onConfirm && onConfirm(cache.current.value, cache.current.index)
    }
  }

  useEffect(() => {
    if (columns && columns.length > 0) {
      if (typeof columns[0] === 'string') {
        const list = columns.map((item, index) => {
          return {
            text: item,
            value: item,
            disabled: false,
            index
          }
        })
        dispatch({list})
      }
    }
  }, [])

  if (!columns) {
    return null
  }

  return (
    <Overlay show={show} position="bottom" animation="slide-up" close={close}>
      <div className="ui-picker">
        <div className="ui-picker-actions">
          <div className="ui-picker-actions-item" onClick={cancelHandle}>{cancelText}</div>
          <div className="ui-picker-title">{title}</div>
          <div className="ui-picker-actions-item confirm" onClick={confirmHandle}>{confirmText}</div>
        </div>
        <div className="ui-picker-cnt">
          <PickerColumn activeIndex={defaultActive} list={state.list} onChange={pickerColumnChange} />
        </div>
      </div>
    </Overlay>
  )

}