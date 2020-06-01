import React from 'react'

export const Tile = ({ url, title, image }) => {
  return (
    <div className="flex flex-col justify-between w-32">
      <img className="w-32 p-2 m-auto" src={image} alt={`${title}`} />
      <h3 className="tile_title break-words">{title}</h3>
    </div>
  )
}
