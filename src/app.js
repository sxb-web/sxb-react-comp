import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import loading from '../esm/loading'

function App() {

  useEffect(function () {
    loading.show()
  }, [])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default hot(App)
