import React from 'react'
import { Tile } from './Tile'

export const DisplayGrid = ({ entries }) => {
  return (
    <div data-testid="display-grid" className=" flex flex-row flex-wrap">
      {entries.map((entry) => (
        <Tile
          key={entry.title}
          title={entry.title}
          year={entry.releaseYear}
          image={entry.images['Poster Art'].url}
        />
      ))}
    </div>
  )
}
