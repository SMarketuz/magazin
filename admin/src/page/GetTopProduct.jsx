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
import { useEffect, useState } from 'react'
import { api } from '../api/api'
import axios from 'axios'
const GetTopProduct = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${api}/api/product/get-data`, {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
    }
    }).then((res) => {
      setData(res.data)
    })
  }, [api])
  console.log(data);

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
            {data.map((item, i) =>(
              <Tr>
                <Td>{i + 1}</Td>
                <Td><Avatar src={item.image} /></Td>
                <Td>{item.name}</Td>
                <Td>{item.informationMin}</Td>
                <Td>
                <ModalProp maxInform={item.informationMax}  />
                </Td>
                <Td>{item.currentCost}</Td>
                <Td>{item.date.slice(0, 7)}</Td>
                <Td>
                  <Button color={'white'} _hover='' bg={'red'} variant='solid' mr={2}><DeleteIcon /></Button>
                  <Button color={'white'} _hover='' bg={'green.300'} variant='solid'><EditIcon /></Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

    </Box>
  )
}

export default GetTopProduct
