import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Container'

export const Header = () => {
  return (
    <section className="bg-primary">
      <Container>
        <div className="flex flex-col justify-between items-center py-2 md:flex-row">
          <Link to="/">
            <h1 className="text-tertiary text-3xl font-bold py-1 mb-2 md:mb-0">
              DEMO Streaming
            </h1>
          </Link>

          <div className="flex flex-row self-end text-sm md:text-base">
            <Link className="btn" to="/">
              Log In
            </Link>
            <Link className="cta-btn" to="/">
              Start your free trial
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
