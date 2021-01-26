# Swipe 轮播
用于循环播放一组图片或内容。
## 引入
```js

import { Swipe } from 'sxb-react-comp' 

```

### 代码演示

### 基础演示
swipe children 每一个 item 代表一张轮播卡片
```js

<Swipe>
  <div style={{background: '#D6EADF', height: '100px'}}>1</div>
  <div style={{background: '#DDA789', height: '100px'}}>2</div>
  <div style={{background: '#C3D899', height: '100px'}}>3</div>
</Swipe>

```

### 纵向滚动
设置 vertical 属性后滑块会纵向排列，此时需要指定滑块容器的高度 height。

```js

<Swipe vertical height="100px">
  <div style={{background: '#D6EADF', height: '100px'}}>1</div>
  <div style={{background: '#DDA789', height: '100px'}}>2</div>
  <div style={{background: '#C3D899', height: '100px'}}>3</div>
</Swipe>

```
### 监听change 事件

通过 onChange 监听 当前 slide 信息 ({x,y,index}) 其中 x 代表滚动的translateX 值。 y代表滚动translateY 的值。index 代表 切换后的 slide 下标
```js

<Swipe autoplay={false} onChange={e => Toast(e.index)}>
  <div style={{background: '#D6EADF', height: '100px'}}>1</div>
  <div style={{background: '#DDA789', height: '100px'}}>2</div>
  <div style={{background: '#C3D899', height: '100px'}}>3</div>
</Swipe>

```

### 自定义指示器
通过renderIndicators 实现一个自定义指示器

```js

<Swipe
  renderIndicators={index => (
    <div className="custom" style={{background: 'rgba(0, 0, 0, 0.1)', color: '#fff', lineHeight: '22px', padding: '0 6px', position: 'absolute', right: '5px', bottom: '5px'}}>
      {index + 1}/3
    </div>
  )}
>
 <div style={{background: '#D6EADF', height: '100px'}}>1</div>
 <div style={{background: '#DDA789', height: '100px'}}>2</div>
 <div style={{background: '#C3D899', height: '100px'}}>3</div>
</Swipe>

```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否自动播放 | _boolean_ | true |
| loop | 是否可以循环播放 | _boolean_ | true |
| duration | 单页切换的时间 | _number_ | 300（ms） |
| interval | 轮播间隔时间 | _number_ | 3000（ms） |
| initialIndex | 初始化slide index 值 | _number_ | 0 |
| width | 指定 swipe的width | _string_ | 100% |
| height | 指定 swipe的height | _string_ | auto |
| showIndicators | 是否显示指示器 | _boolean_ | true |
| renderIndicators | 自定义指示器 | _function_ | null |
| vertical | 是否垂直轮播，需要指定 swipe height | _boolean_ | false |
| touchable | 是否可以手指切换， false 默认在外部添加一个遮罩 | _boolean_ | true |
| threshold | 切换的阈值，可以设置为小数，如 0.1，或者整数，如 100。当该值为小数时，threshold 被当成一个百分比，最终的阈值为 slideWrapperWidth * threshold 或者 slideWrapperHeight * threshold。当该值为整数时，则阈值就是 threshold。 | _number_ | 100（px） |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 切换slide 回调 | ({x, y, index})=> {} |

### Swipe 实例方法

通过 ref 可以获取到 Swipe 实例并调用实例方法，详见组

| 方法名 | 说明 | 参数 | 说明 |
| --- | --- | --- | --- |
| slideTo | 滚动到某一个slide | (index, animate = true) | index: 滚动到指定下标，animate 是否采用动画过度
| getCurrentSlide | 获取当前slide 下标 | | |
| refresh | 当swipe 变化 的时候 需要主动调用， 比如动态添加移除slide 的时候 | | |