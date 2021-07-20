import PropTypes from 'prop-types'
import React, { useState, useContext, createContext } from 'react'

import { userService } from '../../services/userService'

function useProvideAuth() {
  const [authState, setAuthState] = useState({
    user: userService.getCachedUser(),
    error: null,
    isLoading: false,
  })

  const signin = (email, pass) => {
    setAuthState({ ...authState, isLoading: true })
    userService
      .login(email, pass)
      .then(data => {
        setAuthState({
          isLoading: false,
          user: data,
          error: null,
        })
      })
      .catch(err => {
        setAuthState({
          isLoading: false,
          user: undefined,
          error: err.message,
        })
      })
  }

  const signout = () => {
    userService.logout().then(() => {
      setAuthState({
        isLoading: false,
        user: undefined,
        error: null,
      })
    })
  }

  return {
    error: authState.error,
    isLoading: authState.isLoading,
    user: authState.user,
    signin,
    signout,
  }
}

const authContext = createContext()

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => useContext(authContext)

AuthProvider.propTypes = {
  children: PropTypes.element,
}

AuthProvider.defaultProps = {
  children: null,
}
