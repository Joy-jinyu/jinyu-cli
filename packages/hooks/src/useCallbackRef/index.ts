import { useCallback, useLayoutEffect, useRef } from 'react'

/**
 * 保证callback内的引用一直存在
 */
export const useCallbackRef = <T extends (...args: any[]) => unknown>(fn: T | undefined): T => {
  const ref = useRef(fn)

  useLayoutEffect(() => {
    ref.current = fn
  })

  return useCallback(((...args) => ref.current?.(...args)) as T, [])
}
