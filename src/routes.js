import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Template } from './template'
import { PrivateRoute } from './components'

import { Login, Home, Todo, Dash, Settings } from './views'

const privateRoutes = [
  { url: '/', component: Home },
  { url: '/todo', component: Todo },
  { url: '/dash', component: Dash },
  { url: '/settings', component: Settings },
]

export default () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      {privateRoutes.map(({ url, component: Component }) => (
        <PrivateRoute path={url} key={url} exact>
          <Template>
            <Component />
          </Template>
        </PrivateRoute>
      ))}
    </Switch>
  </Router>
)
