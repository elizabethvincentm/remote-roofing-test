import React, { useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Series, Movies } from './'
import { Header, SubHeader, Tile, DisplayGrid, Footer } from '../components'
import clapBoard from '../assets/clapboard.png'
import { AppState } from '../contexts'

export const Home = () => {
  const { state } = AppState()
  console.log(state)
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SubHeader text="Popular Titles" />
      <div>
        <Link className="mr-4" to="/series">
          <div className="flex flex-col justify-between w-32">
            <img
              className="w-32 p-2 m-auto"
              src={clapBoard}
              alt={`Popular Series`}
            />
            <h3 className="tile_title break-words">Popular Series</h3>
          </div>
        </Link>
        <Link className="mr-4" to="/movies">
          <div className="flex flex-col justify-between w-32">
            <img
              className="w-32 p-2 m-auto"
              src={clapBoard}
              alt={`Popular Moview`}
            />
            <h3 className="tile_title break-words">Popular Movies</h3>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  )
}
