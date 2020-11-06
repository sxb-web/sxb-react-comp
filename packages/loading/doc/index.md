# Loading 加载

加载图标，用于表示加载中的过渡状态

## 引入

```jsx harmony

import { Loading } from 'sxb-react-comp'

```

## Usage

### 加载类型
通过 type 属性可以设置加载图标的类型，默认为 spinner，可选值为 circular。

```jsx harmony

 <Loading type="spinner" />
 <Loading type="circular" />

```

### 自定义颜色

通过 color 属性设置加载图标的颜色。

```jsx harmony

  <Loading type="spinner" color="blue" />
  <Loading type="circular" color="blue" />

```

### 自定义大小

通过 size 属性设置加载图标的大小，默认值是 14 默认单位为 px

```jsx harmony

 <Loading type="spinner" size="20" />
 <Loading type="circular" size="20" />

```

### 加载文案

可以使用默认插槽在图标的右侧插入加载文案。


```jsx harmony

 <Loading type="spinner" size="20">加载中...</Loading>
 <Loading type="circular" size="20">加载中...</Loading>

```

### 垂直排列
设置 vertical 属性后，图标和文案会垂直排列。
```jsx harmony

  <Loading type="spinner" vertical size="20">加载中...</Loading>
  <Loading type="circular" vertical size="20">加载中...</Loading>

```

## Props

| 参数      | 说明                         | 类型               | 默认值     |
| --------- | ---------------------------- | ------------------ | ---------- |
| color     | 颜色                         | _string_           | `#858B9C`  |
| type      | 类型，可选值为 `spinner`     | _string_           | `circular` |
| size      | 加载图标大小，默认单位为`px` | _number  | `30`     |
| text-size | 文字大小，默认单位为`px`     | _number  | `14`     |
| vertical  | 是否垂直排列图标和文字内容   | _boolean_          | `false`    |

### children

| 名称    | 说明     |
| ------- | -------- |
| default | 加载文案 |

