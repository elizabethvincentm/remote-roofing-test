import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Series, Movies } from './index'
import { Header, SubHeader, Tile, DisplayGrid, Footer } from '../components'
import clapBoard from '../assets/clapboard.png'

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SubHeader text="Popular Titles" />

      <Switch>
        <Route path="/series">
          <Series />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/">
          <DisplayGrid>
            <Tile url="/series" title="Popular Series" image={clapBoard} />
            <Tile url="/movies" title="Popular Movies" image={clapBoard} />
          </DisplayGrid>
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
