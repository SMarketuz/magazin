import { Box, Text, Input, Button, Avatar, useDisclosure } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import ModalProp from '../components/modal/modal'
import Search from '../components/search/search'
const GetTopProduct = () => {
  

  return (
    <Box w={'95%'} m={'auto'} pl={'300px'} pt={'50px'}>
      <Box w={'100%'}>
        <Search />
      </Box>
      <TableContainer border={'1px solid #ADADAE'} rounded={'12px'}>
        <Table variant='striped'>
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Rasmi</Th>
              <Th>Nomi</Th>
              <Th >Qisqa ma'lumot</Th>
              <Th >To'liq ma'lumot</Th>
              <Th >Narxi</Th>
              <Th >Sana</Th>
              <Th >Qo'shimcha</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td><Avatar /></Td>
              <Td>Monitor</Td>
              <Td>Monitor 19razmer Qora</Td>
              <Td>
               <ModalProp   />
              </Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>
                <Button color={'white'} _hover='' bg={'red'} variant='solid' mr={2}><DeleteIcon /></Button>
                <Button color={'white'} _hover='' bg={'green.300'} variant='solid'><EditIcon /></Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

    </Box>
  )
}

export default GetTopProduct
