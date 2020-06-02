import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import { Container } from '../components'

test('shows children content on render', () => {
  render(
    <Container>
      <div>test node</div>
    </Container>
  )
  expect(screen.queryByText('test node')).toBeInTheDocument()
})
