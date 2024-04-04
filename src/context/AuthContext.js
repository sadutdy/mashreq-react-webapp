import React, { createContext, useContext, useState } from 'react'
import { languages, bgColors } from '../lang'

import users from '../data/users.json'

export const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authError, setAuthError] = useState('')
  const [lang, setLang] = useState('en')

  const login = async ({ email, password }) => {
    setAuthError('')

    try {
      // Mocking API call for login
      // In a real application, you would make an actual API call here
      // and handle the response accordingly
      const user = users.find(
        (e) => e.email === email && e.password === password,
      )

      // Assuming login is successful and user data is returned

      if (user) {
        setUser(user)
        setLang(user?.lang || 'en')
        return user
      } else {
        setAuthError('Inavlid credetials , Please try again')
        // throw new Error('User not found');
      }
    } catch (error) {
      console.error('Login error:', error)
      throw new Error('Login failed')
    }
  }

  // Clear user data on logout
  const logout = () => setUser(null)

  //set user specific lang
  const changeLang = (value) => setLang(value)

  //translate text from user specific lang
  const translate = (key) => languages[lang][key] || key
  //get lang specific background color
  const getBgColor = () => bgColors[lang] || 'black'

  return (
    <AuthContext.Provider
      value={{
        user,
        lang,
        authError,
        login,
        logout,
        changeLang,
        translate,
        setAuthError,
        getBgColor,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
