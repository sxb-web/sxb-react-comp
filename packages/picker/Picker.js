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

  function pickerColumnChange(index) {
    // cache.current = { value: state.list[index].value, index }
    // onChange && onChange(state.list[index].value, index)
  }

  function cancelHandle() {
    close && close()
    onCancel && onCancel()
  }

  function confirmHandle() {
    close && close()
    // if (!cache.current) {
    //   onConfirm && onConfirm(state.list[defaultActive].value, state.list[defaultActive].index)
    // } else {
    //   onConfirm && onConfirm(cache.current.value, cache.current.index)
    // }
  }

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
        <PickerView activeIndex={defaultActive} columns={columns} onChange={pickerColumnChange} />
      </div>
    </Overlay>
  )
}

function PickerView(props) {

  const cache = useRef(null)

  const {
    columns,
    value
  } = props

  const [state, dispatch] = useMyReducer({
    list: null,
    isCascade: false, // 是否为级联选择
  })

  function onPickerChange(sortIndex, valueIndex) {
    const currentActiveList = [...cache.current.activeList]
    currentActiveList[sortIndex] = valueIndex
    console.log('进来了', sortIndex, valueIndex, cache.current.activeList, currentActiveList)
    const originList = cache.current.list
    const _origin = [...originList]
    if (state.isCascade) {
      if (sortIndex < originList.length - 1) {
        let initData = columns
        for (let i = 0; i < sortIndex; i++) {
          initData = initData[cache.current.activeList[i]].children
        }
        const list = treeData(initData, [], sortIndex, valueIndex)
        _origin.splice(sortIndex)
        // 修改currentActive
        for (let i = sortIndex + 1; i < originList.length; i++) {
          currentActiveList[i] = 0
        }

        // console.log('initData：', initData)
        // console.log('list: ', list)
        // console.log('originList: ', originList)
        // console.log('currentActiveList: ', currentActiveList)
        // console.log('finally: ', _origin.concat(list))
        const _list = _origin.concat(list)
        cache.current.list = _list
        dispatch({list: _list})
      }
    }
    cache.current.list = [...currentActiveList]
    dispatch({activeList: [...currentActiveList]})
  }

  useEffect(() => {
    const { list, isCascade = false, initActiveList } = formatData(columns)
    cache.current = {
      list,
      activeList: initActiveList
    }
    dispatch({list, isCascade})
  }, [columns])
  

  if (!state.list) {
    return null
  }

  return (
    <div className="ui-picker-cnt">
      {
        state.list.map((item, index) => (
          <div className="ui-picker-cnt-item" key={index}>
            <PickerColumn isRelation={false} list={item} onChange={valueIndex => onPickerChange(index, valueIndex)} />
          </div>
        ))
      }
    </div>
  )
}

function formatData(array) {
  if (array && array.length > 0) {
    const first = array[0]
    if (typeof first === 'string') {
      return { list: [singleColumn(array)], initActiveList: [0] }
    } else if (first instanceof Array) {
      let l = []
      for (let i = 0; i < array.length; i++) {
        l.push(singleColumn(array[i]))
      }
      return { list: l, initActiveList: new Array(l.length).fill(0) }
    } else if (first instanceof Object) {
      let l
      let isCascade = false
      if (first.hasOwnProperty('children')) {
        // 级联选择
        l = treeData(array)
        isCascade = true
      } else {
        l = [singleColumn(array)]
      }
      return {list: l, isCascade, initActiveList: new Array(l.length).fill(0)}
    } else {
      return {list: null}
    }
  } else {
    return {list: null}
  }
}

function singleColumn(data) {
  return data.map(item => {
    if (item) {
      if (typeof item === 'string') {
        return {
          text: item,
          disabled: false
        }
      } else {
        return {
          text: item.text,
          disabled: item.hasOwnProperty('disabled') ? item.disabled : false
        }
      }
    }
  })
}

function treeData(data, list = [], sortIndex = 0, valueIndex = 0) {
  let _list = list
  const first = data[sortIndex]
  if (first.hasOwnProperty('children')) {
    _list.push(data.map(item => {
      return {
        text: item.text,
        disabled: item.hasOwnProperty('disabled') ? item.disabled : false
      }
    }))
    return treeData(data[valueIndex].children, _list)
  } else {
    _list.push(data)
    return _list
  }
}

// 根据value值 计算indexList
function getIndexList(value, list) {
  if (value && list) {
    const _v = singleColumn(value)
    let l = []
    for (let i = 0; i < list.length; i++) {
      const index = list[i].map(item => item.text).indexOf(_v[i].text)
      l.push(Math.max(index, 0))
    }
    return l
  } else {
    return []
  }
}