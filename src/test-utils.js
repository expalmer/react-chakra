import React from 'react'
import PropTypes from 'proptypes'
import { render } from '@testing-library/react'
import { ChakraProvider, theme } from '@chakra-ui/react'

const AllProviders = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

AllProviders.propTypes = {
  children: PropTypes.element.isRequired,
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options })

export { customRender as render }
