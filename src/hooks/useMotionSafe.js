import { useMemo } from 'react'

/**
 * Returns whether INFINITE/LOOPING animations are safe to run.
 * 
 * ✅ Always allowed (not gated by this hook):
 *   - Entry animations (fadeIn, slideIn, scaleIn)
 *   - Exit animations
 *   - One-shot transitions
 * 
 * ❌ Only disabled on mobile via this hook:
 *   - repeat: Infinity animations (blur orbs drifting, floating badges, pulse loops)
 *   - Heavy filter: blur() animated elements
 *   - Rotating/scaling orbs that run forever
 * 
 * Use as: const motionSafe = useMotionSafe()
 * Then:   animate={motionSafe ? { y: [0,-15,0] } : {}}
 */
export function useMotionSafe() {
  return useMemo(() => {
    if (typeof window === 'undefined') return true
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !isMobile && !prefersReduced
  }, [])
}
