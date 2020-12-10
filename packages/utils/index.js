
// 如果需要更好的跨浏览器兼容性，请使用 window.pageXOffset 和 window.pageYOffset 代替 window.scrollX 和 window.scrollY

// 判段元素是否是window
export function isWindow(el) {
  return el === window
}

// 获取元素scrollTop
export function getScrollTop(el) {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset
  return Math.max(top, 0)
}

// 设置元素scrollTop
export function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value
  } else {
    el.scrollTo(el.scrollX, value)
  }
}

// 获取浏览器（滚动条）scrollTop
export function getRootScrollTop() {
  return (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
}

// 设置浏览器（滚动条）scrollTop
export function setRootScrollTop(value) {
  setScrollTop(window, value)
  setScrollTop(document.body, value)
}

// 获取元素距离顶部的高度
export function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0
  }

  const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}


// 获取元素的高
export function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight
  }
  return el.getBoundingClientRect().height
}