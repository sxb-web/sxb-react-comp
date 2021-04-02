# result-page

结果页展示

## 引入

```js

import { ResultPage } from 'sxb-react-comp'

```

## 代码演示

通过 type 值来 决定结果页 的 类型 支持 ['error', 'search', 'empty', 'wechat']

### 自定义图片

通过 icon 来指定


### 自定义标题
通过 title 指定

### 自定义文案
通过 description 指定

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | _string_ | `empty` |
| icon | 自定义图片 | _string_ | `` |
| title | 标题 | _string_ | `` |
| description | 描述 | _string_ | `描述文字` |