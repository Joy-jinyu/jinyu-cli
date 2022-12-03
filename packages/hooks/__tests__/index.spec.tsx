import { describe, expect, test } from '@jest/globals'
import * as React from 'react'
import { act, renderHook } from '@testing-library/react-hooks/dom'
import { useCallbackRef } from '../src'

function useCounter() {
  const [count, setCount] = React.useState(0)

  const increment = useCallbackRef(() => setCount(count + 1))

  return { count, increment }
}

describe('useCallbackRef', () => {
  test('carry hook', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })
})
