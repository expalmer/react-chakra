import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { AuthProvider } from './hooks'

import Routes from './routes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()
