# PullRefresh 下拉刷新

用于提供下拉刷新的交互操作。

## 引入

```js

import { PullRefresh } from 'sxb-react-comp'

// or

import PullRefresh from 'sxb-react-comp/lib/pull-refresh'
import 'sxb-react-comp/lib/pull-refresh/style/css'

```
## 代码演示

### 基础用法
下拉刷新时会触发 refresh 事件，在事件的回调函数中可以进行同步或异步操作，操作前将 loading 设置为true，操作完成后将 loading 设置为 false，表示加载完成。这样的好处是 可以通过调用  refresh 方法 完成自动下拉刷新

```jsx harmony
import React from 'react'
import PullRefresh from 'sxb-react-comp/lib/pull-refresh'
import 'sxb-react-comp/lib/pull-refresh/style/css'

export default function Page() {

  function refreshHandle(key) {
    dispatch({[key]: true})
    setTimeout(() => {
      Toast('刷新成功')
      dispatch({[key]: false})
    }, 2000)      
  }

  return (
    <PullRefresh 
      loading={state.showOne} 
      refresh={() => refreshHandle('showOne')}
    >
      <div style={{height: '500px'}}>
        基础用法
      </div>
    </PullRefresh>        
  ) 
}
```

### 自定义展示

通过 render 方法 可以接管组件内部的不同状态下的 ui展示，render 的参数是 status = {isPulling, isLoosing, isLoading, distance}, isPulling 是用户正在下拉的过程，可以通过distance
 计算下拉的百分比，isLoosing 是 达到可以释放的阶段，isLoading 是正在加载的阶段
 
```jsx harmony

export default function Page() {

  function refreshHandle(key) {
    dispatch({[key]: true})
    setTimeout(() => {
      Toast('刷新成功')
      dispatch({[key]: false})
    }, 2000)      
  }

function renderCustom(status) {
    if (status.isPulling) {
      return (
        <div>
          <img
            src="https://img.yzcdn.cn/vant/doge.png"
            style={{ transform: `scale(${status.distance / 80})`, display: 'block', height: '60px' }}
          />
          <div>下拉即可刷新...</div>
        </div>
      )
    }
    if (status.isLoosing) {
      return (
        <div>
          <img
            src="https://img.yzcdn.cn/vant/doge.png"
            style={{ display: 'block', height: '60px' }}
          />
          <div>释放就可以刷新哦</div>
        </div>
      )
    }

    if (status.isLoading) {
      return (
        <div>
          <img
            src="https://img.yzcdn.cn/vant/doge-fire.jpg"
            style={{ display: 'block', height: '60px' }}
          />
          <div>拼命加载...</div>
        </div>
      )
    }
  }

  return (
    <PullRefresh 
      loading={state.showThree}
      headHeight={80}
      render={renderCustom}
      refresh={() => refreshHandle('showOne')}
    >
      <div style={{height: '500px'}}>
        基础用法
      </div>
    </PullRefresh>        
  ) 
}


```

## Question

### PullReresh 的内容未填满屏幕时，只有一部分区域可以下拉？

默认情况下，下拉区域的高度是和内容高度保持一致的，如果需要让下拉区域始终为全屏，可以给 PullRefresh 设置一个与屏幕大小相等的最小高度：

### 单独设置 loading = true 是不能 触发 refresh 回调

因为 loading 的 true 或者 false 只是 控制 下拉的距离，这是设计的规则，我们希望用户在refresh 里面控制loading 的
值，以及request。通过 直接调用 refresh 可以完成 自动刷新

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 激活项 | _boolean_ | false |
| disabled | 是否禁止下拉 | _boolean_ | false |
| headHeight | 下拉的触发刷新的距离阈值 | _number_ | 50 |
| animationDuration | 回弹的动画时间 | _number_ | 300ms |
| pullingText | 下拉过程提示文案 | _string_ | 下拉即可刷新... |
| loosingText | 释放过程提示文案 | _string_ | 释放即可刷新... |
| loadingText | 加载过程提示文案 | _string_ | 加载中... |

### Events
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| refresh | 刷新回调 |  |
| render | 接管下拉ui | 查看上面自定义介绍 |


