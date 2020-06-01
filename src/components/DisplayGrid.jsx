import React from 'react'
import { Tile } from './Tile'

export const DisplayGrid = ({ entries }) => {
  return (
    <div className="flex flex-row flex-wrap items-center">
      {entries
        .slice(0, 21)
        .sort((entry1, entry2) => {
          if (entry1.title === entry2.title) {
            return 0
          }
          if (typeof entry1.title === typeof entry2.title) {
            return entry1.title < entry2.title ? -1 : 1
          }
          return typeof entry1.title < typeof entry2.title ? -1 : 1
        })
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
