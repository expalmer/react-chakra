import React from 'react'
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  ButtonGroup,
  Button,
  IconButton,
} from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { useDash } from './hooks/useDash'

export const Dash = () => {
  const { data, loading, page, next, prev } = useDash()

  return (
    <Table variant="simple">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Specie</Th>
          <Th w="200px">
            <ButtonGroup size="sm" isAttached variant="outline">
              <IconButton
                aria-label="Left"
                icon={<FaArrowLeft />}
                onClick={prev}
              />
              <Button isLoading={loading}>page {page}</Button>
              <IconButton
                aria-label="Right"
                icon={<FaArrowRight />}
                onClick={next}
              />
            </ButtonGroup>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map(character => (
          <Tr key={character.id}>
            <Td>{character.name}</Td>
            <Td>{character.species}</Td>
            <Td>
              <Flex justifyContent="center">
                <Image
                  borderRadius="full"
                  boxSize="70px"
                  src={character.image}
                  alt={character.name}
                />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
