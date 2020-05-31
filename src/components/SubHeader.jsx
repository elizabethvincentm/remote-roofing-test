import React from 'react'
import { Container } from './Container'

export const SubHeader = ({ text }) => {
  return (
    <section className="sub_header">
      <Container>
        <h1>{text}</h1>
      </Container>
    </section>
  )
}
