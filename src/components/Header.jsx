import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Container'

export const Header = () => {
  return (
    <section className="header">
      <Container>
        <div className="flex flex-row justify-between items-center py-2">
          <Link to="/">
            <h1 className="header_h1">DEMO Streaming</h1>
          </Link>

          <div className="flex flex-row">
            <Link className="login_btn" to="/">
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
