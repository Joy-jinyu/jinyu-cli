import * as React from 'react'
import { render } from '@testing-library/react'
import { UploadGallery } from '../src'

describe('child render', () => {
  test('render', () => {
    // data-testid=""
    const { getByTestId } = render(<UploadGallery action="ss" />)
    expect(getByTestId('count').innerHTML).toBe('1')
  })
})
