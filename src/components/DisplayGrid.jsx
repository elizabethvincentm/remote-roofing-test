import React from 'react'
import { Tile } from './Tile'

export const DisplayGrid = ({ entries }) => {
  return (
    <div data-testid="display-grid" className="flex flex-wrap md:-mx-4">
      {entries.map((entry, index) => (
        <Tile
          key={`${entry.title}-${index}`}
          title={entry.title}
          year={entry.releaseYear}
          image={entry.images['Poster Art'].url}
        />
      ))}
    </div>
  )
}
