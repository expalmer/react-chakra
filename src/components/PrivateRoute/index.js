import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useAuth } from '../../hooks'

export function PrivateRoute({ children, ...rest }) {
  const { user } = useAuth()
  return (
    <Route
      exact
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
}

PrivateRoute.defaultProps = {
  children: null,
}
