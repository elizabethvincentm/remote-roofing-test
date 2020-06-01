import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Series, Movies } from './pages'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/series">
          <Series />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
