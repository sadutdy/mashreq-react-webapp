// MockContextProvider.js
import React from 'react'

export const MockContext = React.createContext({
    // Provide default values or mock data here
})

export const MockContextProvider = ({ children, value }) => (
    <MockContext.Provider value={value}>{children}</MockContext.Provider>
)
