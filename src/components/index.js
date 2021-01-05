import React, { useReducer } from 'react'

export function useMyReducer(initialState) {
  return useReducer(
    (state, payload) => ({...state, ...payload}),
    initialState
  )
}