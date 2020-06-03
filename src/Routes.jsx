import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Series, Movies } from './pages'
import { Section, Header, Footer } from './components'

export const Routes = () => {
  return (
    <Router>
      <Section>
        <Header />
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
        <Footer />
      </Section>
    </Router>
  )
}
