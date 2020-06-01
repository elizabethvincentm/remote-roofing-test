import React from 'react'
import { Container } from './Container'

import { AppState } from '../contexts'
import { DisplayGrid } from './DisplayGrid'

export const DisplayData = ({ filterByType }) => {
  const { state } = AppState()
  const { status, data } = state
  return (
    <section className="py-10">
      <Container>
        {status === 'success' && (
          <DisplayGrid
            entries={data.entries.filter(
              (entry) =>
                entry.programType === filterByType && entry.releaseYear >= 2010
            )}
          />
        )}
        {status === 'loading' && <div>Loading...</div>}
      </Container>
    </section>
  )
}
