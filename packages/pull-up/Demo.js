import React, { useEffect } from 'react'
import PullUp from './index'
import './style'
import Tabs from "../tabs"
import '../tabs/style'
import { useMyReducer } from "../../src/components"

export default function Demo() {

  const [state, dispatch] = useMyReducer({
    active: 0,
    loading: false,
    finished: false,
    error: false,
    list: [],
    loading1: false,
    finished1: false,
    error1: false,
    list1: []
  })

  function getList() {
    dispatch({loading: true})
    console.log(state.list)
    const timer = setTimeout(() => {
      clearTimeout(timer)
      const data = new Array(10).fill('')
      let l = state.list.concat(data)
      const finished = l.length === 40
      dispatch({list: l, finished, loading: false, error: false})
    }, 1000)
  }

  function getList1() {
    dispatch({loading1: true})
    console.log(state.list1)
    const timer = setTimeout(() => {
      clearTimeout(timer)
      const data = new Array(10).fill('')
      let l = state.list1.concat(data)
      const finished = l.length === 20
      dispatch({list1: l, finished1: finished, loading1: false, error1: false})
    }, 1000)
  }

  useEffect(() => {
    console.log('change')
  })

  return (
    <div className="demo-page">
      <Tabs active={state.active} sticky onChange={index => dispatch({active: index})}>
        <div title="基础演示">
          <PullUp loading={state.loading} finished={state.finished} error={state.error} load={getList}>
            {
              state.list.map((item, index) => <div key={index} style={{lineHeight: '60px', textAlign: 'center', background: 'pink', color: '#000', fontSize: '18px', marginTop: '10px'}}>{index}</div>)
            }
          </PullUp>
        </div>
        <div title="固定高度滚动">
          <PullUp height="500px" loading={state.loading1} finished={state.finished1} error={state.error1} load={getList1}>
            {
              state.list1.map((item, index) => <div key={index} style={{lineHeight: '60px', textAlign: 'center', background: 'pink', color: '#000', fontSize: '18px', marginTop: '10px'}}>{index}</div>)
            }
          </PullUp>
        </div>
      </Tabs>
    </div>
  )
}