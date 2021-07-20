import React from 'react'
import { Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const NavLink = props => <Link as={RouterLink} {...props} />
