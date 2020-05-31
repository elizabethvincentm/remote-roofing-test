import React from 'react'
import { Link } from 'react-router-dom'

export const Tile = ({ url, title, image }) => {
  return (
    <Link className="flex flex-col mr-4" to={url}>
      <div className="bg-secondary relative">
        <img
          className="relative bg-secondary inset-0 w-24 p-2 m-auto"
          src={image}
          alt="clapboard"
        />
      </div>

      <h3 className="tile_title">{title}</h3>
    </Link>
  )
}
