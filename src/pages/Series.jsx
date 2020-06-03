import React from 'react'
import { SubHeader, Content } from '../components'

export const Series = () => {
  return (
    <>
      <SubHeader text="Popular Series" />
      <Content filterByType="series" />
    </>
  )
}
