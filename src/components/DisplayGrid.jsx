import React from 'react'
import { Container } from './Container'

export const DisplayGrid = ({ children }) => {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-row">{children}</div>
      </Container>
    </section>
  )
}
