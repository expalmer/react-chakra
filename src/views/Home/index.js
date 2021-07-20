import React from 'react'
import { Heading, Button } from '@chakra-ui/react'

import { useAuth } from '../../hooks'

export const Home = () => {
  const { user, signout, isLoading } = useAuth()

  return (
    <>
      <Heading as="h1">Home</Heading>
      <Heading as="h3">user: {user.username}</Heading>
      <p>
        <Button isLoading={isLoading} onClick={() => signout()}>
          Logo off
        </Button>
      </p>
    </>
  )
}
