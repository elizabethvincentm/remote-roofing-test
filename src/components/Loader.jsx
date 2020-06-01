import React from 'react'
import { Container } from './Container'
import { Skeleton } from '@material-ui/lab'

export const Loader = () => {
  return (
    <div className="flex flex-row flex-wrap items-center">
      {[...Array(4)].map(() => (
        <div class="card md:w-1/3 lg:w-1/4 md:px-4 md:mb-8">
          <article class="h-full cursor-pointer flex flex-col justify-start">
            <div class="flex-none w-32 md:w-full">
              <Skeleton
                animation="wave"
                variant="rect"
                width={210}
                height={118}
              />
            </div>
            <div class="flex-1 mt-auto md:py-6">
              <Skeleton animation="wave" width={210} />
              <Skeleton animation="wave" width="60%" />
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}
