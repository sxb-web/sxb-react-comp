# Toast 轻提示

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

## 引入

```js
import { Toast } from 'sxb-react-comp'
```

## 代码演示

### 文字提示

```js

Toast('提示内容')

```

### 加载提示
使用 Toast.loading 方法展示加载提示，通过 loadingType 属性可以切换加载动画。
```js
Toast.loading('加载中...');
Toast.loading({message: '加载中...', loadingType: 'circular'});
```

### 成功/失败提示
```js
Toast.success('成功文案');
Toast.fail('失败文案');
```

### 自定义图标
```js
Toast({message: '文字提示', icon: 'home'})
Toast({message: '文字提示', icon: 'https://img.yzcdn.cn/vant/logo.png'})
```

### 自定义位置
```js
Toast.success({message: '文字提示文字', position: 'top'})
Toast.success({message: '文字提示', position: 'bottom'})
```

### 动画时间

通过duration 来控制显示时间，默认是 3s 当 为 0 时，不会自动关闭toast 需要开发者自己关闭

```js

const t = Toast.success({message: '文字提示', duration: 0})

t.hide()

```

## Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 提示内容，当有icon时 文字最多不超过6个 | _string_ |  |
| type | 类型，可选值为 `text` `success` `loading` `fail` | _string_ | `text` |
| icon | 图标 可以是 icon font 也可以是网络图片 | _string_ |  |
| loadingType | 加载的动画类型 | _string_ | `spinner` |
| duration | 显示时长，当为0 不会自动关闭 | _number srting_ | `3000` |
| position | 位置 | _string_ | `center` |