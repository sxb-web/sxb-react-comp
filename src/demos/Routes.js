import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Index from './Index'
import Button from '../../packages/button/demo'
import Icon from '../../packages/icon/demo'
import Cell from '../../packages/cell/demo'

export default function Demos() {
  return (
    <Switch>
      <Route path="/demos/index" children={<Index />} />
      <Route path="/demos/button" children={<Button />} />
      <Route path="/demos/icon" children={<Icon />} />
      <Route path="/demos/cell" children={<Cell />} />
      <Redirect to="/demos/index" />
    </Switch>
  )
}