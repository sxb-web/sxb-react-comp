import React, { useRef, useEffect } from 'react'

function initImgObserver(imgObserver, root) {
  return new IntersectionObserver(entries => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        console.log('Load image.')
        item.target.src = item.target.dataset.src // replace src to load img
        item.target.removeAttribute('alt') // tag loaded img
        imgObserver.current.unobserve(item.target) // cancel observer
      }
    })
  }, { // for demonstration
    root,
    rootMargin: '0% 0% -30% 0%'
  })
}

export default function useLazyLoad(root) {

  const observer = useRef()
  if (!observer.current) {
    observer.current = initImgObserver(observer, root)
  }

  useEffect(function () {
    console.log('update')
  })

}
