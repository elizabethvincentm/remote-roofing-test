import React from 'react'
import { Link } from 'react-router-dom'
import { Container, DisplayData } from '../components'

export const HomeTile = ({ programType }) => {
  return (
    <div className="py-2 mb-6">
      <Container>
        <div className="flex justify-between items-center md:px-4">
          <h3
            data-testid={`popular-${programType}`}
            className="text-xl font-bold tracking-wide break-words capitalize"
          >
            Popular {programType}
          </h3>
          <Link
            data-testid={`link-${programType}`}
            className="btn bg-primary"
            to={`/${programType}`}
          >
            View All {programType}
          </Link>
        </div>
      </Container>
      <DisplayData
        filterByType={`${programType === 'series' ? 'series' : 'movie'}`}
        displayCount={4}
      />
    </div>
  )
}
