# Image
图片组件，支持默认图，懒加载，加载失败图

## 基本用法
使用方法同原生<img>标签完全相同，只额外增加`fit`，`lazy`属性

```js
import React from 'react'
import { Image } from 'sxb-react-comp'

export default function Page() {
  return (
    <Image src={} fit="cover" lazy />
  )
}
```

## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片地址 | _string_ | `defaultSrc` |
| fit | 填充模式，可选值为 `cover` `contain` 等 | _string_ | `contain` |
| lazy | 是否懒加载 | _any_ | `undefined` |
