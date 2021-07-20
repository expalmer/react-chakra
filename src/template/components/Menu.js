import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import {
  ArrowForwardIcon,
  SettingsIcon,
  StarIcon,
  ChatIcon,
} from '@chakra-ui/icons'

import { NavLink } from '../../components'

const menus = [
  {
    id: 1,
    label: 'Home',
    icon: <StarIcon />,
    link: '/',
  },
  {
    id: 2,
    label: 'Dashboard',
    icon: <ArrowForwardIcon />,
    link: '/dash',
  },
  {
    id: 3,
    label: 'Todo List',
    icon: <ChatIcon />,
    link: '/todo',
  },
  {
    id: 4,
    label: 'Settings',
    icon: <SettingsIcon />,
    link: '/settings',
  },
]

export const Menu = () => {
  const { url } = useRouteMatch()
  const selected = menus.find(x => url === x.link) || menus[0]

  return (
    <Box boxShadow="inset 0 -1px #eaeaea">
      <Flex
        as="nav"
        flexGrow="1"
        alignItems="center"
        m="auto"
        maxW="1048px"
        p="0 24px"
        position="relative"
      >
        {menus.map(menu => (
          <NavLink
            to={menu.link}
            key={menu.id}
            padding="0.75rem 0.5rem"
            color={+selected.id === +menu.id ? 'black' : 'gray.500'}
            marginRight="16px"
            fontSize="14px"
          >
            {menu.icon} {menu.label}
          </NavLink>
        ))}
      </Flex>
    </Box>
  )
}
