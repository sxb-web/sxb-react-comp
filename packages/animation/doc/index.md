# Animation

一个动画组件，基于css animation。提供一系列动画，无需为动画苦恼，快速集成。主要是作为一个微组件为其他组件提供css动画。

## 快速开始

目前只是集成了 常用的 fade（淡入淡出）、zoom、slide-left、slide-right、slide-top、slide-bottom 6种常用动画

### 基本用法

```jsx harmony
import React from 'react'
import { Animation } from 'sxb-react-comp'

export default function Index() {
  return (
    <div className="demo-page">
      <div className="demo-page-title">基本用法</div>
      <div className="demo-page-cnt">
        <Animation name="fade">淡入淡出</Animation>
        <Animation name="zoom">zoom</Animation>
        <Animation name="slide-left">slide-left</Animation>
        <Animation name="slide-right">slide-right</Animation>
        <Animation name="slide-up">slide-up</Animation>
        <Animation name="slide-down">slide-down</Animation>
      </div>
    </div>
  )
}

```


## Api

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 控制动画的进场和出场 | _boolean_ | `false` |
| name | 动画名称 | _string_ | `fade` |
| duration | 动画时间 | _number_ | `200` |
| className | 类名 | _boolean_ | `false` |

### Events

   onAnimationEnd
   
    css 动画结束的回调