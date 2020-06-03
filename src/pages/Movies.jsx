import React from 'react'
import { SubHeader, Content } from '../components'

export const Movies = () => {
  return (
    <>
      <SubHeader text="Popular Movies" />
      <Content filterByType="movie" />
    </>
  )
}
