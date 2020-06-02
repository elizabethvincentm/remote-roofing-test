import '@testing-library/jest-dom'

import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Footer } from '../components'
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
  renderWithRouter(<Footer />)
  expect(
    screen.queryByText('Copyright © 2016 DEMO Streaming All Rights Reserved')
  ).toBeInTheDocument()
})
test('shows homepage content on clicking footer page-links', () => {
  renderWithRouter(<Footer />)
  fireEvent.click(screen.queryByText('Home'))
  expect(screen.queryByText('homepage mockup')).toBeInTheDocument()
  fireEvent.click(screen.queryByText('Terms and Conditions'))
  expect(screen.queryByText('homepage mockup')).toBeInTheDocument()
  fireEvent.click(screen.queryByText('Privacy Policy'))
  expect(screen.queryByText('homepage mockup')).toBeInTheDocument()
  fireEvent.click(screen.queryByText('Collection Statement'))
  expect(screen.queryByText('homepage mockup')).toBeInTheDocument()
  fireEvent.click(screen.queryByText('Help'))
  expect(screen.queryByText('homepage mockup')).toBeInTheDocument()
  fireEvent.click(screen.queryByText('Manage Account'))
  expect(screen.queryByText('homepage mockup')).toBeInTheDocument()
})
