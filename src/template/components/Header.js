import React from 'react'
import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Avatar,
  AvatarBadge,
  Button,
} from '@chakra-ui/react'

import { Logo, NavLink, ColorModeSwitcher } from '../../components'
import { useAuth } from '../../hooks'

export const Header = () => {
  const { signout, user } = useAuth()
  return (
    <Flex
      alignItems="center"
      m="auto"
      maxW="1048px"
      h="64px"
      p="0 24px"
      position="relative"
    >
      <Flex flex="1 1" pr="24px">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </Flex>
      <Flex flex="0 0 auto" justifyContent="flex-end">
        <ColorModeSwitcher />
        <Popover>
          <PopoverTrigger>
            <Avatar name={user.username} src="https://bit.ly/dan-abramov">
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              <strong>{user.username}</strong> &bull; <span>{user.email}</span>
            </PopoverHeader>
            <PopoverBody>
              <Button colorScheme="red" onClick={() => signout()}>
                Log Off
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  )
}
