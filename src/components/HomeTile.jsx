import React from 'react'
import { Link } from 'react-router-dom'
import { Container, DisplayData } from '../components'

export const HomeTile = ({ url, title, image, year }) => {
  return (
    <div className="py-2 mb-6">
      <Container>
        <div className="flex justify-between items-center md:px-4">
          <h3 className="text-xl font-bold tracking-wide break-words capitalize">
            Popular {title}
          </h3>
          <Link className="btn bg-primary" to={`/${title}`}>
            View All
          </Link>
        </div>
      </Container>
      <DisplayData
        filterByType={`${title === 'series' ? 'series' : 'movie'}`}
        displayCount={4}
      />
    </div>
  )
}
