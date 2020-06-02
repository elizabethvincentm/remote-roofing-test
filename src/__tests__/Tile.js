import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import { Tile } from '../components'

test('shows tile with program details on render', () => {
  render(
    <Tile
      title="Test Title"
      image={
        'https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg'
      }
      year={2016}
    />
  )
  expect(screen.queryByText('Test Title')).toBeInTheDocument()
  expect(screen.queryByText('2016')).toBeInTheDocument()
  expect(screen.findByTestId('tile-img-node')).toBeTruthy()
})
