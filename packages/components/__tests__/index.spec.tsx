import { describe, expect, test } from 'vitest';
import * as React from 'react'
import { render } from '@testing-library/react'
import { UploadGallery } from '../src'

describe('child render', () => {
  test('render', () => {
    const { container } = render(<UploadGallery action="ss" />)
    expect(container.innerHTML.length > 0).toBe(true)
  })
})
