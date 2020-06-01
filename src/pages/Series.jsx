import React from 'react'
import { Header, SubHeader, Tile, DisplayGrid, Footer } from '../components'
import clapBoard from '../assets/clapboard.png'
import { AppState } from '../contexts'
import { atRule } from 'postcss'

export const Series = () => {
  const { state } = AppState()
  const { status, data } = state
  console.log(state)
  return (
    <>
      <Header />
      <SubHeader text="Popular Series" />

      {status === 'success' && (
        <DisplayGrid
          entries={data.entries.filter(
            (entry) =>
              entry.programType === 'series' && entry.releaseYear >= 2010
          )}
        />
      )}
      {status === 'loading' && <div>Loading...</div>}

      <Footer />
    </>
  )
}
