import React from 'react'
import { Header, SubHeader, HomeTile, Footer } from '../components'
import { AppState } from '../contexts'

export const Home = () => {
  const { state } = AppState()
  console.log(state)
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SubHeader text="Popular Titles" />
      <HomeTile title="series" />
      <HomeTile title="movies" />
      <Footer />
    </div>
  )
}
