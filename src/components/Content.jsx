import React from 'react'
import { Container } from './Container'
import { AppState } from '../contexts'
import { DisplayGrid } from './DisplayGrid'
import { Loader } from './Loader'
import { ErrorDisplay } from './ErrorDisplay'

export const Content = ({ filterByType, displayCount = 21 }) => {
  const { state } = AppState()
  const { status, data } = state
  return (
    <section data-test-d="display-data-node" className="py-4">
      <Container>
        {status === 'success' && (
          <DisplayGrid
            entries={data.entries
              .filter(
                (entry) =>
                  entry.programType === filterByType &&
                  entry.releaseYear >= 2010
              )
              .slice(0, displayCount)
              .sort((entry1, entry2) => {
                if (entry1.title === entry2.title) {
                  return 0
                }
                if (typeof entry1.title === typeof entry2.title) {
                  return entry1.title < entry2.title ? -1 : 1
                }
                return typeof entry1.title < typeof entry2.title ? -1 : 1
              })}
          />
        )}
        {status === 'loading' && <Loader />}
        {status === 'error' && <ErrorDisplay />}
      </Container>
    </section>
  )
}
