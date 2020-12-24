# TabsTitle
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


