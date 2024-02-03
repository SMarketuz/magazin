import { Box, Text, Input, Button, Avatar, useDisclosure, SkeletonCircle, Skeleton } from '@chakra-ui/react'
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
import React, { useState } from 'react'
import Search from './search/search'
import ModalProp from './modal/modal'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const GamersGet = ({loading, data, handleDelete , link}) => {
    const [search, setSearch] = useState('')
  return (
    <Box pt={'30px'}>
        <Box>
            <Search setSearch={setSearch} />
        </Box>
        <TableContainer  border={'1px solid #ADADAE'} rounded={'12px'}>
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
          {loading ? 
          <Tbody>
              <Tr>
                <Td><Skeleton height='20px' /></Td>
                <Td><SkeletonCircle size='10' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td>
                <Skeleton height='20px' />
                </Td>
                <Td><Skeleton height='20px' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td display={'flex'} alignItems={'center'} gap={'15px'}>
                <Skeleton
                  height='40px'
                  bg='green.500'
                  color='white'
                  width={'45px'}
                  fadeDuration={1}
                  rounded={'8px'}
                ></Skeleton>
                 <Skeleton
                  height='40px'
                  bg='green.500'
                  color='white'
                  width={'45px'}
                  fadeDuration={1}
                  rounded={'8px'}
                ></Skeleton>
                </Td>
              </Tr>
              <Tr>
                <Td><Skeleton height='20px' /></Td>
                <Td><SkeletonCircle size='10' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td>
                <Skeleton height='20px' />
                </Td>
                <Td><Skeleton height='20px' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td display={'flex'} alignItems={'center'} gap={'15px'}>
                <Skeleton
                  height='40px'
                  bg='green.500'
                  color='white'
                  width={'45px'}
                  fadeDuration={1}
                  rounded={'8px'}
                ></Skeleton>
                 <Skeleton
                  height='40px'
                  bg='green.500'
                  color='white'
                  width={'45px'}
                  fadeDuration={1}
                  rounded={'8px'}
                ></Skeleton>
                </Td>
              </Tr>
              <Tr>
                <Td><Skeleton height='20px' /></Td>
                <Td><SkeletonCircle size='10' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td>
                <Skeleton height='20px' />
                </Td>
                <Td><Skeleton height='20px' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td><Skeleton height='20px' /></Td>
                <Td display={'flex'} alignItems={'center'} gap={'15px'}>
                <Skeleton
                  height='40px'
                  bg='green.500'
                  color='white'
                  width={'45px'}
                  fadeDuration={1}
                  rounded={'8px'}
                ></Skeleton>
                 <Skeleton
                  height='40px'
                  bg='green.500'
                  color='white'
                  width={'45px'}
                  fadeDuration={1}
                  rounded={'8px'}
                ></Skeleton>
                </Td>
              </Tr>
          </Tbody>
          :
          <Tbody>
            {data.filter((item) => {
              return search.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search)
            }).map((item, i) =>(
              <Tr>
                <Td>{i + 1}</Td>
                <Td><Avatar src={item.image} /></Td>
                <Td>{item.name}</Td>
                <Td>{item.informationMin}</Td>
                <Td>
                <ModalProp maxInform={item.informationMax}  />
                </Td>
                <Td>{item.cost}uzs</Td>
                <Td>{item.date.slice(0, 10)}</Td>
                <Td>{item.rate}</Td>
                <Td>
                  <Button onClick={() => handleDelete(item._id)} color={'white'} _hover='' bg={'red'} variant='solid' mr={2}><DeleteIcon /></Button>
                  <Link to={`/admin/updateGamers/${link}/${item._id}`}>
                    <Button color={'white'} _hover='' bg={'green.300'} variant='solid'><EditIcon /></Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>}
        </Table>
      </TableContainer>
    </Box>
  )
}

export default GamersGet
