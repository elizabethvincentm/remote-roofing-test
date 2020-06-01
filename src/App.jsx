import React from 'react'
import { AppProvider } from './contexts'
import { Routes } from './Routes'
import './index.css'

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}

export default App
