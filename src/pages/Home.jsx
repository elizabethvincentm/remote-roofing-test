import React from 'react'
import { SubHeader, HomeTile } from '../components'

export const Home = () => {
  return (
    <>
      <SubHeader text="Popular Titles" />
      <HomeTile programType="series" />
      <HomeTile programType="movies" />
    </>
  )
}
