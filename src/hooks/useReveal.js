import { useEffect } from 'react'

/**
 * useReveal — adds the 'in' class to any element with class 'reveal'
 * when it enters the viewport. CSS transition in globals.css handles
 * the fade-up animation.
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
          }
        })
      },
      { threshold: 0.1 } // trigger when 10% of element is visible
    )

    elements.forEach((el) => observer.observe(el))

    // Cleanup: stop observing when component unmounts
    return () => observer.disconnect()
  }, [])
}