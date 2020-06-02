import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Header } from '../components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function renderWithRouter(ui) {
  return {
    ...render(
      <Router>
        <Switch>
          <Route path="/series">
            <div>seriespage mockup</div>
          </Route>
          <Route path="/movies">
            <div>moviespage mockup</div>
          </Route>
          <Route path="/">
            <div>homepage mockup</div>
          </Route>
        </Switch>
        {ui}
      </Router>
    ),
  }
}
test('shows content on render', () => {
  renderWithRouter(<Header />)
  expect(screen.queryByText('DEMO Streaming')).toBeInTheDocument()
})
test('shows homepage content on click', () => {
  renderWithRouter(<Header />)
  fireEvent.click(screen.queryByText('DEMO Streaming'))
  expect(screen.queryByText('homepage mockup')).toBeInTheDocument()
})
