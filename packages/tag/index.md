# Tag 标签

## 引入

```js

import { Tag } from 'sxb-react-comp'

```

## 代码演示

### 基础用法

通过 type 属性控制标签颜色

```js

<Tag type="primary">标签</Tag>
<Tag type="link">标签</Tag>
<Tag type="error">标签</Tag>
<Tag type="warn">标签</Tag>
```
### 空心样式
设置 plain 属性设置为空心样式

```js

<Tag type="primary" plain>标签</Tag>
```

### 圆角
设置 round 属性设置为空心样式

```js

<Tag type="primary" round>标签</Tag>
```

### 标签大小
设置 size 属性设置为大小 normal medium large

```js

<Tag type="primary" size="normal">标签</Tag>
<Tag type="primary" size="medium">标签</Tag>
<Tag type="primary" size="large">标签</Tag>
```
### 自定义样式
Tag 组件 提供了 className，style， color， fillColor， textColor 四个属性来支持自定义标签的需求。其中className 和 style 会与当前的Tag 组件的className 与 style 合并。fillColor 与 textColor 的优先级 要高于color。

```js

// 通过color 制定

<Tag color="pink">标签</Tag>
<Tag color="pink" plain>标签</Tag>
<Tag color="pink" round>标签</Tag>
<Tag color="pink" round plain>标签</Tag>

// 通过fillColor，textColor制订

<Cell title="渐变"><Tag fillColor="linear-gradient(90deg, #FC7353 0%, #FC9153 100%)" textColor="#fff">标签</Tag></Cell>
<Cell title="特殊样式"><Tag fillColor="linear-gradient(90deg, #FC7353 0%, #FC9153 100%)" textColor="#fff" round style={{borderBottomLeftRadius: 0}}>标签</Tag></Cell>

```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 自带主题 | _string_ | `default` |
| size | 大小 | _string_ | `normal` |
| plain | 是否镂空 | _boolean_ | `false` |
| round | 是否圆角 | _boolean_ | `false` |
| color | 自定义主题 | _string_ | `` |
| fillColor | 填充色 | _string_ | `` |
| textColor | 字体颜色 | _string_ | `` |