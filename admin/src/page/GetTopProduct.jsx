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
import { useToast } from '@chakra-ui/react'
import ModalProp from '../components/modal/modal'
import Search from '../components/search/search'
import { useEffect, useState } from 'react'
import { api } from '../api/api'
import axios from 'axios'
import { Link } from 'react-router-dom'

const GetTopProduct = () => {
  const [data, setData] = useState([])
  const toast = useToast()
  const [search , setSearch] = useState('')

  console.log(search);
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
  
  const handleDelete = (id) => {
    axios.post(`${api}/api/product/delete-data`, {
      "id": `${id}`
    } ,{
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
      }
    }).then((res) => {
      axios.get(`${api}/api/product/get-data`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
      }
      }).then((res) => {
        setData(res.data)
      })
      toast({
        description: `${res.data.message}`,
        status: 'success',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      })
    })
  }

  return (
    <Box w={'95%'} m={'auto'} pl={'300px'} pt={'50px'}>
      <Box w={'100%'}>
        <Search setSearch={setSearch} />
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
              <Th >Holati</Th>
              <Th >Qo'shimcha</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.filter(item => {
              return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search) ? item : item.date.slice(0, 10).includes(search) ? item : item.badge.toLowerCase().includes(search)
            }).map((item, i) =>(
              <Tr>
                <Td>{i + 1}</Td>
                <Td><Avatar src={item.image} /></Td>
                <Td>{item.name}</Td>
                <Td>{item.informationMin}</Td>
                <Td>
                <ModalProp maxInform={item.informationMax}  />
                </Td>
                <Td>{item.currentCost}uzs</Td>
                <Td>{item.date.slice(0, 10)}</Td>
                <Td>{item.badge}</Td>
                <Td>
                  <Button onClick={() => handleDelete(item._id)} color={'white'} _hover='' bg={'red'} variant='solid' mr={2}><DeleteIcon /></Button>
                  <Link to={`/admin/updateCategory/${item._id}`}>
                    <Button color={'white'} _hover='' bg={'green.300'} variant='solid'><EditIcon /></Button>
                  </Link>
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
