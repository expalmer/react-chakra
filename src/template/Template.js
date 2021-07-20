import PropTypes from 'prop-types'
import React from 'react'
import { Box } from '@chakra-ui/react'

import { Header } from './components/Header'
import { Menu } from './components/Menu'

export const Template = ({ children }) => (
  <>
    <Header />
    <Menu />
    <Box m="auto" maxW="1048px" p="48px 24px">
      {children}
    </Box>
  </>
)

Template.propTypes = {
  children: PropTypes.element,
}

Template.defaultProps = {
  children: null,
}
