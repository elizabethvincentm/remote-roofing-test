import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import { SubHeader } from '../components'

test('shows prop text on render', () => {
  render(<SubHeader text="Test Title" />)
  expect(screen.queryByText('Test Title')).toBeInTheDocument()
})
