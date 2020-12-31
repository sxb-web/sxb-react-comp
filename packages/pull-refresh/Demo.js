import React, { useRef } from 'react'
import PullRefresh from "./index"
import './style'

export default function Page() {
  const pull = useRef(null)

  React.useEffect(() => {
    console.log(pull.current)
  }, [])

  return (
    <div className="demo-page">
      <PullRefresh>
        <div style={{height: '600px'}}>
          基础用法
        </div>
      </PullRefresh>
    </div>
  )
}