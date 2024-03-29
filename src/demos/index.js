import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Button from '../../packages/button/demo'
import Icon from '../../packages/icon/demo'
import Cell from '../../packages/cell/demo'
import Input from '../../packages/input/Demo'
import Overlay from '../../packages/overlay/demo'
import Animation from '../../packages/animation/demo'
import Dialog from '../../packages/dialog/demo'
import Loading from '../../packages/loading/demo'
import Toast from '../../packages/toast/demo'
import Image from '../../packages/image/demo'
import Sticky from '../../packages/sticky/Demo'
import Tabs from '../../packages/tabs/Demo'
import TabsTitle from '../../packages/tabs-title/Demo'
import ShareSheet from '../../packages/share-sheet/Demo'
import PullRefresh from '../../packages/pull-refresh/Demo'
import ActionSheet from "../../packages/action-sheet/Demo"
import DropdownMenu from "../../packages/dropdown-menu/Demo"
import Picker from "../../packages/picker/Demo"
import VirtualKeyboard from "../../packages/virtual-keyboard/Demo"
import Swipe from "../../packages/swipe/Demo"
import PullUp from "../../packages/pull-up/Demo"
import Tag from "../../packages/tag/Demo"
import Badge from "../../packages/badge/Demo"
import ResultPage from "../../packages/result-page/Demo"
import LazyLoad from "../../packages/lazy-load/Demo"
import Layout from  "../../packages/row/Demo"
import NoticeBar from "../../packages/notice-bar/Demo"

export default function Demos() {
  return (
    <Switch>
      <Route path="/demos/button" children={<Button />} />
      <Route path="/demos/icon" children={<Icon />} />
      <Route path="/demos/cell" children={<Cell />} />
      <Route path="/demos/input" children={<Input />} />
      <Route path="/demos/picker" children={<Picker />} />
      <Route path="/demos/overlay" children={<Overlay />} />
      <Route path="/demos/animation" children={<Animation />} />
      <Route path="/demos/dialog" children={<Dialog />} />
      <Route path="/demos/lazy-load" children={<LazyLoad />} />
      <Route path="/demos/loading" children={<Loading />} />
      <Route path="/demos/toast" children={<Toast />} />
      <Route path="/demos/image" children={<Image />} />
      <Route path="/demos/sticky" children={<Sticky />} />
      <Route path="/demos/tabs" children={<Tabs />} />
      <Route path="/demos/tabs-title" children={<TabsTitle />} />
      <Route path="/demos/share-sheet" children={<ShareSheet />} />
      <Route path="/demos/pull-refresh" children={<PullRefresh />} />
      <Route path="/demos/action-sheet" children={<ActionSheet />} />
      <Route path="/demos/dropdown-menu" children={<DropdownMenu />} />
      <Route path="/demos/virtual-keyboard" children={<VirtualKeyboard />} />
      <Route path="/demos/swipe" children={<Swipe />} />
      <Route path="/demos/pull-up" children={<PullUp />} />
      <Route path="/demos/tag" children={<Tag />} />
      <Route path="/demos/badge" children={<Badge />} />
      <Route path="/demos/result-page" children={<ResultPage />} />
      <Route path="/demos/layout" children={<Layout />} />
      <Route path="/demos/notice-bar" children={<NoticeBar />} />
      <Redirect to="/demos/index" />
    </Switch>
  )
}
