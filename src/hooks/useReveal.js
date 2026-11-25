import { useEffect } from 'react'

function isInView(node, rootMarginPx = 80) {
  const rect = node.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  return rect.top < vh + rootMarginPx && rect.bottom > -rootMarginPx
}

export function useReveal(selector = '.reveal') {
  useEffect(() => {
    const nodes = [...document.querySelectorAll(selector)]
    if (!nodes.length) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }

    const reveal = (node, index = 0) => {
      node.style.transitionDelay = `${Math.min(index, 3) * 70}ms`
      node.classList.add('is-visible')
    }

    // Immediately show anything already on screen so first paint isn't blank.
    nodes.forEach((node, index) => {
      if (isInView(node)) reveal(node, index)
    })

    const pending = nodes.filter((node) => !node.classList.contains('is-visible'))
    if (!pending.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const index = pending.indexOf(entry.target)
          reveal(entry.target, Math.max(index, 0))
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )

    pending.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [selector])
}
