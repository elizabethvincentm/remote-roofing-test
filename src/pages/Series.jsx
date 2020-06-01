import React from 'react'
import { Header, SubHeader, DisplayData, Footer } from '../components'

export const Series = () => {
  return (
    <>
      <Header />
      <SubHeader text="Popular Series" />
      <DisplayData filterByType="series" />
      <Footer />
    </>
  )
}
