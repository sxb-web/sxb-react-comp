# Tabs 标签页

Sticky 组件与 CSS 中position: sticky属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

## 引入

```js
import { Tabs } from 'sxb-react-comp'
// or
import Tabs from "sxb-react-comp/lib/tabs"
import 'sxb-react-comp/lib/tabs/style/css'

```

## 代码演示

### 基础演示

将内容包裹在 Sticky 组件内即可
```js
<Tabs active={a} onChange={index => setA(index)}>
  {
    new Array(4).fill('').map((item, index) => <div className="section" title={`标签${index}`} key={index}>内容{index}</div>)
  }
</Tabs>
```

### 滑动
标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中, 可以通过threshold来控制阈值。

```js
<Tabs active={b} onChange={index => setB(index)}>
  {
    new Array(12).fill('').map((item, index) => <div className="section" title={`标签${index}`} key={index}>内容{index}</div>)
  }
</Tabs>      
```

### 吸顶
通过 sticky 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。

```js

<Tabs active={c} sticky onChange={index => setC(index)}>
  {
     new Array(10).fill('').map((item, index) => <div className="h-300 section" title={`标签${index}`} key={index}>内容{index}</div>)
  }
</Tabs>
```

### 自定义



## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 激活项 | _number_ | 0 |
| threshold | 阈值 | _number_ | 5 |
| background | 背景色 | _string_ | #fff |
| isShowLine | 是否显示线条 | _boolean_ | true |
| lineStyle | 线条样式 | _object_ | null |
| lineClass | 线条样式 | _object_ | null |
| leftSlot | 左边插槽 | _object_ | null |
| rightSlot | 右边插槽 | _object_ | null |
| sticky | 是否开启吸顶 | _string_ | `0px` |
| offset | 吸顶距离 | _string_ | `0px` |
| zIndex | 吸顶后的层级 | _string_ | `99` |
| lazy | 是否开启延时渲染 | _Boolean_ | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onScroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |
| onChange | active 改变触发 | { index: 改变后的标识 } |
| onClick | 点击触发 | { index: 点击的标识 } |

