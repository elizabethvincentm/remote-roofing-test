import React from 'react'
import { Container } from './Container'
import { Tile } from './Tile'

export const DisplayGrid = ({ entries }) => {
  return (
    <div className="flex flex-row flex-wrap items-center">
      {entries
        .slice(0, 21)
        .sort((entry1, entry2) => entry1.title < entry2.title)
        .map((entry) => (
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
