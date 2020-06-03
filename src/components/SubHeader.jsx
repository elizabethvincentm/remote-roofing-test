import React from 'react'
import { Container } from './Container'

export const SubHeader = ({ text }) => {
  return (
    <section className="bg-secondary text-tertiary text-xl py-3 mb-6">
      <Container>
        <h1>{text}</h1>
      </Container>
    </section>
  )
}
