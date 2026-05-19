import { useMemo } from 'react'

/**
 * Returns whether expensive animations are safe to run.
 * - Returns false on mobile screens (< 768px) or when user prefers reduced motion.
 * - Use this to gate infinite / blur / floating animations.
 */
export function useMotionSafe() {
  return useMemo(() => {
    if (typeof window === 'undefined') return true
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !isMobile && !prefersReduced
  }, [])
}
