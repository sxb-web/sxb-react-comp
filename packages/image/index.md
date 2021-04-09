# Image
增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

## 引入

```js
import { Image } from 'sxb-react-comp'

```

## 代码演示

### 基础用法
基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。

```js
import React from 'react'
import { Image } from 'sxb-react-comp'

export default function Page() {
  return (
    <Image 
      src={} 
      width="100px"
      height="100px"
    />
  )
}
```
### 填充模式
通过 fit 属性可以设置图片填充模式，可选值见下方表格。
```js
import React from 'react'
import { Image } from 'sxb-react-comp'

export default function Page() {
  return (
    <Image 
      src={} 
      width="100px"
      height="100px"
      fit="cover"
    />
  )
}
```

### 圆角图片

通过 radius 指定圆角大小， 同样可以指定 round 属性 可以 直接变成 圆形图片
```js
import React from 'react'
import { Image } from 'sxb-react-comp'

export default function Page() {
  return (
    <Image 
      src={} 
      width="100px"
      height="100px"
      radius="10px"
      fit="cover"
    />
  )
}
```

### 图片懒加载

指定 lazy 可以指定 图片的懒加载。默认是检测 window 的滚动事件。如果是容器内滚动，指定overflow  即可运行

```js
import React from 'react'
import { Image } from 'sxb-react-comp'

export default function Page() {
  return (
    <Image 
      src={} 
      lazy
    />
  )
}
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | _string_ | - |
| fit | 图片填充模式 | _string_ | `fill` |
| alt | 替代文本 | _string_ | - |
| width | 宽度 | string_ | 100% |
| height | 高度 | string_ | 100% |
| radius | 圆角大小，默认单位为 `px` | string_ | `0px` |
| round | 是否显示为圆形 | _boolean_ | `false` |
| lazy | 是否开启图片懒加载 | _boolean_ | `false` |
| overflow | 懒加载在容器内滚动 | _boolean_ | `false` |
| isShowError | 是否展示图片加载失败提示 | _boolean_ | `true` |
| isShowLoading | 是否展示图片加载中提示 | _boolean_ | `true` |
| errorComponent | 自定义失败组件 | _string_ | `加载失败` |
| loadingComponent | 自定义加载组件 | _string_ | `加载中` |

### 图片填充模式 

| 名称       | 含义                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取 `none` 或 `contain` 中较小的一个                    |

### Events

| 事件名 | 说明               | 回调参数            |
| ------ | ------------------ | ------------------- |
| onLoad   | 图片加载完毕时触发 | -                   |
| onError  | 图片加载失败时触发 | -                   |