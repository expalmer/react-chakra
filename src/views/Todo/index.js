import React from 'react'
import {
  Heading,
  Box,
  Flex,
  List,
  ListItem,
  Input,
  Button,
} from '@chakra-ui/react'

import { useTodo } from './hooks/useTodo'

export const Todo = () => {
  const { view, reverse, items, addTask, removeTask, toggleDoneTask } =
    useTodo()

  const handleEnter = e => {
    if (e.keyCode === 13) {
      if (!e.target.value) return

      addTask(e.target.value)
      e.target.value = ''
    }
  }
  // TODO: implement reverse
  // TODO: implement view (all/done/undone)

  return (
    <>
      <Heading as="h1">Session ToDo List</Heading>
      <Box>
        <Input onKeyUp={handleEnter} defaultValue="" />
      </Box>
      <List spacing={3} p="48px 0">
        {items.map(item => (
          <ListItem key={item.id}>
            <Flex>
              <Box
                style={{ textDecoration: item.done ? 'line-through' : '' }}
                onClick={() => toggleDoneTask(item.id)}
              >
                {item.task}
              </Box>
              <Button
                colorScheme="red"
                size="xs"
                ml="24px"
                onClick={() => removeTask(item.id)}
              >
                X
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  )
}
