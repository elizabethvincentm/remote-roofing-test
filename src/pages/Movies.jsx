import React from 'react'
import { Header, SubHeader, DisplayData, Footer } from '../components'

export const Movies = () => {
  return (
    <>
      <Header />
      <SubHeader text="Popular Movies" />
      <DisplayData filterByType="movie" />
      <Footer />
    </>
  )
}
