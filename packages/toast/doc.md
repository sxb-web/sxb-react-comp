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
使用 Toast.loading 方法展示加载提示，通过 forbidClick 属性可以禁用背景点击。
```js
Toast.loading('加载中...');
```

### 成功/失败提示
```js
Toast.success('成功文案');
Toast.fail('失败文案');
```
