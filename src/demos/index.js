import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Button from '../../packages/button/demo'
import Icon from '../../packages/icon/demo'
import Cell from '../../packages/cell/demo'
import Input from '../../packages/input/demo'
import Overlay from '../../packages/overlay/demo'
import Animation from '../../packages/animation/demo'
import Dialog from '../../packages/dialog/demo'
import LazyLoad from '../../packages/lazy-load/demo'
import Loading from '../../packages/loading/demo'

export default function Demos() {
  return (
    <Switch>
      <Route path="/demos/button" children={<Button />} />
      <Route path="/demos/icon" children={<Icon />} />
      <Route path="/demos/cell" children={<Cell />} />
      <Route path="/demos/input" children={<Input />} />
      <Route path="/demos/overlay" children={<Overlay />} />
      <Route path="/demos/animation" children={<Animation />} />
      <Route path="/demos/dialog" children={<Dialog />} />
      <Route path="/demos/lazy-load" children={<LazyLoad />} />
      <Route path="/demos/loading" children={<Loading />} />
      <Redirect to="/demos/index" />
    </Switch>
  )
}
