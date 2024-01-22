import { Box, Text,Input,Button } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
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
const GetTopProduct = () => {
  return (
    <Box w={'95%'} m={'auto'} pl={'300px'} pt={'50px'}>
        <TableContainer border={'1px solid #ADADAE'} rounded={'12px'}>
  <Table variant='striped'>
    <Thead>
      <Tr>
        <Th>Image</Th>
        <Th>Name</Th>
        <Th >Information</Th>
        <Th >Original cost</Th>
        <Th >Current cost</Th>
        <Th >Rate</Th>
        <Th >Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td> <Button _hover='' bg={'red'} variant='solid'><DeleteIcon /></Button></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </Box>
  )
}

export default GetTopProduct
