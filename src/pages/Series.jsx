import React from 'react'
import { Header, SubHeader, DisplayData, Footer } from '../components'

export const Series = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <Header />
      <SubHeader text="Popular Series" />
      <DisplayData filterByType="series" />
      <Footer />
    </section>
  )
}
