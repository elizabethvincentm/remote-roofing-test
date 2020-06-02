import React from 'react'
import { render, act, screen } from '@testing-library/react'
import { AppProvider, AppState } from '../contexts'

const AppTestConsumer = () => {
  const { state } = AppState()
  const { status, data } = state
  console.log(state)
  return (
    <div>
      <div>status:{status}</div>
      <div>data:{data?.title}</div>
    </div>
  )
}

test('AppConsumer returns "loading" initially and then "success" on data fetch', async () => {
  const fakeResponse = { title: 'Wolf Creek' }
  const promise = Promise.resolve(fakeResponse)
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => promise,
    })
  })
  const { getByText } = render(
    <AppProvider>
      <AppTestConsumer />
    </AppProvider>
  )
  expect(getByText(/^status:/)).toHaveTextContent('loading')
  expect(getByText(/^data:/).textContent).toBe('data:')
  await act(() => promise)
  expect(getByText(/^status:/)).toHaveTextContent('success')
  expect(getByText(/^data:/).textContent).toBe('data:Wolf Creek')
})

test('AppConsumer returns error when data fetch fails', async () => {
  jest
    .spyOn(window, 'fetch')
    .mockImplementationOnce(() => Promise.reject('API Down'))
  const { getByText } = render(
    <AppProvider>
      <AppTestConsumer />
    </AppProvider>
  )
  expect(getByText(/^status:/)).toHaveTextContent('loading')
  expect(getByText(/^data:/).textContent).toBe('data:')
  await screen.findByText('status:error')
  expect(getByText(/^data:/).textContent).toBe('data:')
})
