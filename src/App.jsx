import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css'
import { Home } from './pages'

function App() {
  return (
    <div className="">
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  )
}

export default App
