import React, {useEffect, useState} from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import MarkDown from '../components/MarkDown'

const config = [
  {
    title: '开发指南',
    groups: [
      {
        name: '快速开始',
        path: '/quickstart',
        doc: require('./quickstart.md').default
      }
    ]
  },
  {
    title: '基础组件',
    groups: [
      {
        name: 'Icon 图标',
        path: '/icon',
        doc: require('../../packages/icon/doc/index.md').default
      },
      {
        name: 'Button 按钮',
        path: '/button',
        doc: require('../../packages/button/doc/index.md').default
      },
      {
        name: 'Cell 单元格',
        path: '/cell',
        doc: require('../../packages/cell/doc/index.md').default
      }
    ]
  }
]

export default function DocsLayout() {
  let location = useLocation()

  const [url, setUrl] = useState('/')

  useEffect(() => {
    const pathname = location.pathname
    const pathArray = pathname.split('/')
    const lastUrl = pathArray[pathArray.length - 1]
    setUrl(lastUrl)
  }, [location])

  return (
    <div className="main-layout">
      {/*menu*/}
      <div className="main-menu">
        {
          config.map((item, index) => (
            <div className="main-menu-group" key={index}>
              <div className="main-menu-group-title">{item.title}</div>
              {
                item.groups.map((menu, i) => <a href={`#/docs${menu.path}`} className={location.pathname === `/docs${menu.path}` ? 'main-menu-item active' : 'main-menu-item'} key={i}>{menu.name}</a>)
              }
            </div>
          ))
        }
      </div>
      {/*doc*/}
      <div className="main-page">
        <Switch>
          {
            config.map(item => {
              return item.groups.map((s, k) => <Route key={k} path={'/docs' + s.path} children={<MarkDown file={s.doc} />} />)
            })
          }
          <Redirect to="/docs/quickstart" />
        </Switch>
      </div>
      <div className="main-iframe">
        <iframe frameBorder="0" src={`#/demos/${url}`}></iframe>
      </div>
    </div>
  )
}