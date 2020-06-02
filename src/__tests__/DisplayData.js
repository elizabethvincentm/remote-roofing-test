import '@testing-library/jest-dom'
import React from 'react'
import { render, act, screen } from '@testing-library/react'
import { DisplayData } from '../components'
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
      title: 1,
      programType: 'series',
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
      title: 2,
      programType: 'series',
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

test('FETCH_SUCCESS: display content filtered as "series" and sorted', async () => {
  const promise = Promise.resolve(fakeResponse)
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => promise,
    })
  })
  const { getByText } = render(
    <AppProvider>
      <DisplayData filterByType="series" />
    </AppProvider>
  )
  await act(() => promise)
  expect(getByText('Wolf Creek')).toBeInTheDocument()
  expect((await screen.findByTestId('display-grid')).textContent).toBe(
    '1201522015Billions2016Billions2016Wolf Creek2016'
  )
})

test('FETCH_SUCCESS: display content filtered as "movie"', async () => {
  const promise = Promise.resolve(fakeResponse)
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => promise,
    })
  })

  const { getByText } = render(
    <AppProvider>
      <DisplayData filterByType="movie" />
    </AppProvider>
  )
  await act(() => promise)
  expect(getByText('No Activity')).toBeInTheDocument()
  expect((await screen.findByTestId('display-grid')).textContent).toBe(
    'No Activity2015'
  )
})
test('FETCH_SUCCESS: display content w.r.t displayCount and sorted', async () => {
  const promise = Promise.resolve(fakeResponse)
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => promise,
    })
  })

  render(
    <AppProvider>
      <DisplayData filterByType="series" displayCount={1} />
    </AppProvider>
  )
  await act(() => promise)
  expect((await screen.findByTestId('display-grid')).textContent).toBe(
    'Wolf Creek2016'
  )
})
test('DATA_LOADING: display loader', async () => {
  jest
    .spyOn(window, 'fetch')
    .mockImplementationOnce(() => Promise.reject('API Down'))
  render(
    <AppProvider>
      <DisplayData filterByType="series" />
    </AppProvider>
  )
  screen.findByTestId('loader-node')
})
test('FETCH_ERROR: display errorpage', async () => {
  jest
    .spyOn(window, 'fetch')
    .mockImplementationOnce(() => Promise.reject('API Down'))
  render(
    <AppProvider>
      <DisplayData filterByType="series" />
    </AppProvider>
  )
  await screen.findByTestId('error-node')
})
