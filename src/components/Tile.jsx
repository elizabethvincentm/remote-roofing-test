import React from 'react'

export const Tile = ({ url, title, image, year }) => {
  return (
    <div class="card w-full mb-2 md:w-1/3 lg:w-1/4 md:px-4 md:mb-8">
      <article class="h-full cursor-pointer flex flex-col justify-start">
        <div class="flex-none w-full h-auto">
          <div class="aspect-ratio-16/9 relative overflow-hidden rounded-sm lg:rounded">
            <img
              src={image}
              alt={`${title}`}
              class="block absolute w-full h-auto"
            />
          </div>
        </div>
        <div class="flex-1 py-2 md:mt-auto md:py-6">
          <h3 class="font-medium text-1xl mb-1 xl:text-xl md:mb-4">{title}</h3>
          <p class="text-md leading-normal hidden md:block">{year}</p>
        </div>
      </article>
    </div>
  )
}
