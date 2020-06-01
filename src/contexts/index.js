import React, { useState, useEffect, useContext } from 'react'
const AppContext = React.createContext(null)

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({ status: 'idle', data: null })
  useEffect(() => {
    const fetchData = async () => {
      setState((prev) => ({ status: 'loading', data: prev.data }))
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
        )
        const data = await response.json()
        setState({ status: 'success', data: data })
      } catch (error) {
        console.error('Error:', error)
        setState((prev) => ({ status: 'error', data: prev.data }))
      }
    }
    fetchData()
  }, [])

  return <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
}
export const AppState = () => useContext(AppContext)
