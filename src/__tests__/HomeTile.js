import '@testing-library/jest-dom'

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { HomeTile } from '../components'
import { Routes } from '../Routes'
import { AppProvider } from '../contexts'

const fakeResponse = {
  total: 2,
  entries: [
    {
      title: 'Wolf Creek',
      programType: 'series',
      images: {
        'Poster Art': {
          url:
            'https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg',
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2016,
    },
    {
      title: 'No Activity',
      programType: 'movie',
      images: {
        'Poster Art': {
          url:
            'https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg',
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2015,
    },
    {
      title: 'Billions',
      programType: 'series',
      images: {
        'Poster Art': {
          url:
            'https://streamcoimg-a.akamaihd.net/000/117/25/11725-PosterArt-deecf8dbd786dfa2d964413b0bf83726.jpg',
          width: 720,
          height: 1080,
        },
      },
      releaseYear: 2016,
    },
  ],
}
test('shows homepage links with program details on render', () => {
  const promise = Promise.resolve(fakeResponse)
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => promise,
    })
  })
  render(
    <AppProvider>
      <Routes>
        <HomeTile programType="series" />
      </Routes>
    </AppProvider>
  )
  expect(screen.findByTestId('popular-series')).toBeTruthy()
  expect(screen.findByTestId('display-data-node')).toBeTruthy()
  fireEvent.click(screen.queryByTestId('link-series'))
  expect(screen.findByTestId('series-section-node')).toBeTruthy()
})
