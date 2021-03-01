# Badge 徽标

在右上角展示徽标数字或小红点。

## 引入

```js

import { Badge } from 'sxb-react-comp'

// or

import Badge from 'sxb-react-comp/lib/badge'
import 'sxb-react-comp/lib/badge/style'

```

## 代码演示

### 基础用法
设置 content 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 dot 来显示小红点。

```js
 <Badge content="5" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
 // 默认是不会显示0
 <Badge content="0" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
 <Badge content="10" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
 <Badge content="Hot" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
 <Badge dot><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
```

### 最大值

设置 max 属性后，并且content 为数字。当 content 的数值超过最大值时，会自动显示为 {max}+。

```js

<Badge content="20" max="9" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
<Badge content="50" max="20" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
<Badge content="200" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>

```

### 自定义颜色

通过 color 属性来设置徽标的颜色。

```js

<Badge content="5" color="#2F86F6" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
<Badge content="10" color="#2F86F6" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
<Badge content="Hot" color="#2F86F6" style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
<Badge color="#2F86F6" dot><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>

```

### 自定义徽标内容

通过 contentRender 插槽可以自定义徽标的内容，比如插入一个图标。

```js

<Badge renderContent={<Icon name="success" />} style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
<Badge renderContent={<Icon name="wrong" />} style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>
<Badge renderContent={<Icon name="visible" />} style={{marginRight: '15px'}}><div style={{background: '#f8f8f8', width: '40px', height: '40px'}} /></Badge>

```

### 独立展示

当 Badge 没有子元素时，会作为一个独立的元素进行展示

```js

<Badge content="30" style={{marginRight: '35px'}} />
<Badge content="200" style={{marginRight: '15px'}} />

```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 徽标内容 | _string_ | `` |
| color | 徽标背景颜色 | _string_ | `` |
| dot | 是否展示为小红点 | _boolean_ | `false` |
| max | 最大值，超过最大值会显示 {max}+，仅当 content 为数字时有效 | _string_ | `99` |
| contentRender  | 自定义内容 | _string_ | `` |
