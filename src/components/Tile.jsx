import React from 'react'

export const Tile = ({ title, image, year }) => {
  return (
    <div className="card w-full mb-4 md:w-1/3 lg:w-1/4 md:px-4 md:mb-8">
      <article className="h-full cursor-pointer flex flex-col justify-start">
        <div className="flex-none w-full h-auto">
          <div className="aspect-ratio-16/9 relative overflow-hidden rounded-sm lg:rounded bg-gray-200">
            <img
              data-testid="tile-img-node"
              src={image}
              alt={`${title}`}
              className="block absolute w-full h-auto"
            />
          </div>
        </div>
        <div className="flex-1 py-2 md:mt-auto md:py-6">
          <h3 className="font-medium text-1xl mb-1 xl:text-xl md:mb-4">
            {title}
          </h3>
          <p className="text-md leading-normal hidden md:block">{year}</p>
        </div>
      </article>
    </div>
  )
}
