import React from 'react'
import { Header, SubHeader, DisplayData, Footer } from '../components'

export const Movies = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <Header />
      <SubHeader text="Popular Movies" />
      <DisplayData filterByType="movie" />
      <Footer />
    </section>
  )
}
