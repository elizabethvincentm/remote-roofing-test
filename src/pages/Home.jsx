import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Series, Movies } from './index'
import { Header } from '../components'

export const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/series">Series</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/series">
          <Series />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    </div>
  )
}
