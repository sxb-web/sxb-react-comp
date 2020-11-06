import React, { useRef, useEffect } from 'react'

function initImgObserver(imgObserver, test) {
  return new IntersectionObserver(entries => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        item.target.src = item.target.dataset.src // replace src to load img
        item.target.removeAttribute('alt') // tag loaded img
        imgObserver.current.unobserve(item.target) // cancel observer
      }
    })
  },test && {
    rootMargin: '0% 0% -50% 0%'
  })
}

export default function useLazyLoad(test) {
  const observer = useRef()

  useEffect(function () {
    console.log('update')
    if (!observer.current) {
      observer.current = initImgObserver(observer, test)
    } else {
      observer.current.disconnect()
    }
    const _img = document.querySelectorAll('img[alt="lazy"]')
    _img.forEach(img => {
      observer.current.observe(img)
    })
    return () => {
      observer.current.disconnect()
    }
  })

}
