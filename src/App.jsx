import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css'
import { Home, Series, Movies } from './pages'

function App() {
  return (
    <div className="">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
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
        </div>
      </Router>
    </div>
  )
}

export default App
