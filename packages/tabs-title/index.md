# TabsTitle

本意是服务Tabs 菜单的切换，但是发现其有很大的通用性，在特定场景下帮助开发者更快实现业务，所以单独提出这个组件

使用 render props 创建一个 灵活的 可以滑动的标签栏，内部自行处理动画，而每个菜单的样式交给开发者自行编辑

## 引入

```js
import { TabsTitle } from 'sxb-react-comp'

// or

import TabsTitle from 'sxb-react-comp/lib/tabs-title'
import 'sxb-react-comp/lib/tabs-title/style/css'

```

## 演示

### 基础演示

接收一个数组，返回 一个 list item， 用于渲染ui，回调函数(item, isActive, index) => () 其中item 是单个信息，isActive 表示当前元素是否激活， index 是序号

```jsx harmony
import React, { useState } from 'react'
import { TabsTitle } from 'sxb-react-comp'

const list = ['新车', '二手车', '美容保养', '洗车打蜡', '装饰配件', '改装装潢', '汽车维修', '其他服务']
export default function Page() {
  const [active, setActive] = useState(0)
  return (
    <div className="demo-page">
      <div className="demo-page-title">基础演示</div>
      <TabsTitle active={active} list={list.slice(0, 3)} onChange={e => setActive(e)}>
        {
          (item, isActive) => (
            <div className="item" style={{padding: '20px'}}>{item}</div>
          )
        }
      </TabsTitle>
    </div>
  )
}
```

### 可滑动

当list长度超过5的时候，会滑动，可以根据实际情况调整阈值threshold

```jsx harmony
import React, { useState } from 'react'
import { TabsTitle } from 'sxb-react-comp'

const list = ['新车', '二手车', '美容保养', '洗车打蜡', '装饰配件', '改装装潢', '汽车维修', '其他服务']
export default function Page() {
  const [active, setActive] = useState(0)
  return (
    <div className="demo-page">
      <div className="demo-page-title">基础演示</div>
      <TabsTitle active={active} list={list} onChange={e => setActive(e)}>
        {
          (item, isActive) => (
            <div className="item" style={{padding: '20px'}}>{item}</div>
          )
        }
      </TabsTitle>
    </div>
  )
}
```

### 复杂用法1

```jsx

<TabsTitle active={b} isShowLine={false} list={list} onChange={e => setB(e)}>
  {
     (item, isActive) => (
        <div className={isActive ? 'test-tabs-title active' : 'test-tabs-title'}>
           <div className="name">{item}</div>
           <div className="desc">今日优惠</div>
        </div>
     )
  }
</TabsTitle>

```

### 复杂用法2

```jsx

 <div style={{background: '#2F86F6', margin: '0 -10px'}}>
    <TabsTitle
       active={c}
      list={list}
      lineClass="up-arrow"
      rightSlot={(
         <div style={{height: '78px', lineHeight: '78px', color: '#fff', padding: '0 5px', boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.2)'}}>
           展开
         </div>
      )}
      onChange={e => setC(e)}>
      {
         (item, isActive) => (
            <div className={isActive ? 'test-tabs-title-special active' : 'test-tabs-title-special'}>
                <div className="img-box">
                  <img src="https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/ClueDistribution/localnews/2020-05-21/1590044385653.jpg" />
                </div>
                <div className="name">{item}</div>
            </div>
         )
      }
        </TabsTitle>
        <div className="section h-300"></div>
      </div>
```

## API

### props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 激活项 | _number_ | 0 |
| list | 数组 | _array_ | [] |
| threshold | 阈值 | _number_ | 5 |
| background | 背景色 | _string_ | #fff |
| isShowLine | 是否显示线条 | _boolean_ | true |
| lineStyle | 线条样式 | _object_ | null |
| lineClass | 线条样式 | _object_ | null |
| leftSlot | 左边插槽 | _object_ | null |
| rightSlot | 右边插槽 | _object_ | null |

### events

| functions | 说明 | 
| --- | --- |
| onChange | active 变化 index => {} |
| onClick | 点击事件 index => {} |


