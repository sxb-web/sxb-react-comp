import React from 'react'
import Sticky from './index'
import './style'
import Button from "../button"
import '../button/style'

export default function Index() {

  const [container, setContainer] = React.useState(null)
  React.useEffect(() => {
    setContainer(document.getElementById('container'))
  }, [])

  return (
    <div className="demo-page" style={{height: '10000px'}}>
      <div style={{paddingTop: '100px'}}>
        <Sticky>
          <Button type="primary">基础用法</Button>
        </Sticky>
      </div>
      <div style={{marginTop: '50px'}}>
        <Sticky offset="50">
          <div style={{marginLeft: '120px'}}><Button type="info">吸顶距离</Button></div>
        </Sticky>
      </div>
      <div style={{marginTop: '50px'}}>
        <div>指定容器</div>
        <div style={{padding: '20px 0', marginTop: '10px', height: '300px', background: '#f8f8f8'}} id="container">
          <div style={{marginLeft: '100px'}}>
            <Sticky container={container}>
              <div style={{marginLeft: '120px'}}><Button type="danger">指定容器</Button></div>
            </Sticky>
          </div>
        </div>
      </div>
    </div>
  )
}