import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'

import { useAuth } from '../../hooks'
import { Logo, NavLink } from '../../components'

export const Login = () => {
  const { user, isLoading, signin, error } = useAuth()
  const { register, handleSubmit } = useForm()

  const history = useHistory()

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user, history])

  const onSubmit = ({ email, pass }) => {
    if (isLoading) {
      return
    }
    signin(email, pass)
  }

  return (
    <Box bg="blue.50" h="100vh" paddingTop="64px">
      <Flex
        maxWidth="440px"
        flexDirection="column"
        p="56px 48px"
        m="0 auto"
        borderRadius="12px"
        bg="white"
        boxShadow="rgb(46 41 51 / 8%) 0px 1px 2px, rgb(71 63 79 / 8%) 0px 2px 4px"
      >
        <Flex justifyContent="center" pb="24px">
          <NavLink to="/" textAlign="center">
            <Logo />
          </NavLink>
        </Flex>
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl paddingBottom={2}>
            <FormLabel>E-mail</FormLabel>
            <Input
              type="text"
              {...register('email', { required: true })}
              w="100%"
            />
          </FormControl>
          <FormControl paddingBottom={2}>
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              {...register('pass', { required: true })}
              w="100%"
            />
          </FormControl>

          <FormControl paddingBottom={2}>
            <Button
              type="submit"
              isLoading={isLoading}
              colorScheme="blue"
              size="md"
              leftIcon={<LockIcon />}
            >
              Entrar
            </Button>
          </FormControl>
          {error && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>OPS!</AlertTitle>
              <AlertDescription>Credenciais inválidas!</AlertDescription>
            </Alert>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
