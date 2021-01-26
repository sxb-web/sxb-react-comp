import React, { useReducer, useEffect, useRef, useCallback } from 'react'

export function useMyReducer(initialState) {
  return useReducer(
    (state, payload) => ({...state, ...payload}),
    initialState
  )
}

// 防抖
export function useDebounce(fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null })
  useEffect(function () {
    current.fn = fn
  }, [fn])

  return useCallback(function f(...args) {
    if (current.timer) {
      clearTimeout(current.timer)
    }
    current.timer = setTimeout(() => {
      current.fn.call(this, ...args)
    }, delay)
  }, dep)
}