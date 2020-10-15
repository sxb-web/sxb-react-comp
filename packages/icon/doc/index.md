# Icon 图标
基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。

## 引入

```js
import {Icon} from 'DawnUI'
```

## 代码演示

### 基本用法
```js
<Icon name="time" />
```
### icon 大小

```js
<Icon name="time" size="32px" />
```

### icon 颜色

```js
<Icon name="time" color="red" />
```
## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | icon 名称 | _string_ |  |
| size | 尺寸， eg: 18px | _string_ | `14px` |
| color | 颜色 | _string_ |  |

