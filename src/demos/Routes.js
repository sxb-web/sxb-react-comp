import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Index from './Index'
import Button from '../../packages/button/demo'
import Icon from '../../packages/icon/demo'
import Cell from '../../packages/cell/demo'
import Input from '../../packages/input/demo'
import Overlay from '../../packages/overlay/demo'
import Animation from '../../packages/animation/demo'
import Dialog from '../../packages/dialog/demo'

export default function Demos() {
  return (
    <Switch>
      <Route path="/demos/index" children={<Index />} />
      <Route path="/demos/button" children={<Button />} />
      <Route path="/demos/icon" children={<Icon />} />
      <Route path="/demos/cell" children={<Cell />} />
      <Route path="/demos/input" children={<Input />} />
      <Route path="/demos/overlay" children={<Overlay />} />
      <Route path="/demos/animation" children={<Animation />} />
      <Route path="/demos/dialog" children={<Dialog />} />
      <Redirect to="/demos/index" />
    </Switch>
  )
}