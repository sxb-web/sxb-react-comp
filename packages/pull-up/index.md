# pullUp 上拉加载组件

用于提供上拉加载的交互操作

## 引入

```js

import { PullUp } from 'sxb-react-comp'

```

### 代码演示

### 基础演示
List 组件通过 loading 和 finished 两个变量控制加载状态，当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可。若数据已全部加载完毕，则直接将 finished 设置成 true 即可。

```jsx harmony

import React, { useEffect } from 'react'
import PullUp from './index'
import './style'
import Tabs from "../tabs"
import '../tabs/style'
import { useMyReducer } from "../../src/components"

export default function Demo() {

  const [state, dispatch] = useMyReducer({
    loading: false,
    finished: false,
    error: false,
    list: []
  })

  function getList() {
    dispatch({loading: true})
    const timer = setTimeout(() => {
      clearTimeout(timer)
      const data = new Array(10).fill('')
      let l = state.list.concat(data)
      const finished = l.length === 40
      dispatch({list: l, finished, loading: false, error: false})
    }, 1000)
  }
  
  return (
    <div className="demo-page">
       <PullUp loading={state.loading} finished={state.finished} error={state.error} load={getList}>
          {
            state.list.map((item, index) => <div key={index} style={{lineHeight: '60px', textAlign: 'center', background: 'pink', color: '#000', fontSize: '18px', marginTop: '10px'}}>{index}</div>)
          }
       </PullUp>
    </div>
  )
}

```

### 错误提示
若列表数据加载失败，将 error 设置成 true 即可显示错误提示，用户点击错误提示后会重新触发 load 事件。

### 空提示

若列表数据为空，将 finished 设置成 true，并且将list 传入PullUp，即可显示空状态。不传 list 不会展示空状态， 同时提供emptyComponent 支持自定义展示空状态

```jsx harmony
<PullUp list={state.list} emptyText="暂无数据" loading={state.loading} finished={state.finished} error={state.error} load={getList}>
         
</PullUp>

```
## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否正在加载中 | _boolean_ | false |
| finished | 是否没有数据可以加载了 | _boolean_ | false |
| error | 是否出错了 | _boolean_ | false |
| list | 当前数组, 非必传，当你需要显示空数据状态传值 | _array_ | [] |
| finishedText | 结束的文案 | _string_ | 没有更多了 |
| emptyText | 空数据文案 | _string_ | 暂无数据 |
| emptyComponent | 空数据组件 | _string_ |  |
| errorText | 报错文案 | _string_ | 请求失败，点击重新加载 |
| immediateCheck | 是否在初始化时立即执行滚动位置检查 | _boolean_ | true |
| offset | 滚动条与底部距离小于 offset 时触发 | _number_ | 50（px） |
| height | 若设置height 将会采用div 内滚动，否则会监听浏览器滚动条 | _string_ | null |
| loaderComponent | 自定义加载中组件 | _string_ | null |
| className | root添加自定义class | _string_ | null |
| style | root添加自定义style | _string_ | null |

### Events
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| load | 上拉回调 |  |
