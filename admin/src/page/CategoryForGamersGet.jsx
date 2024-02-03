import { Box, Text, Input, Button, Avatar, useDisclosure, SkeletonCircle, Skeleton } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
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
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../api/api'
import Gamers from '../components/gamers'
import GamersGet from '../components/GamersGet'

const CategoryForGamersGet = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [apiRoute, setApiRoute] = useState('keyboard')
    useEffect(() => {
      axios.get(`${api}/api/${apiRoute}/get-data`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
      }
      }).then((res) => {
        setData(res.data)
        setLoading(false)
      })
    }, [apiRoute])

console.log(apiRoute);  
  

    const handleDelete = (id) => {
        axios.post(`${api}/api/${apiRoute}/delete-data`, {
          "id": `${id}`
        } ,{
          headers: {
            "ngrok-skip-browser-warning": true,
            "Access-Control-Allow-Origin": "*",
          }
        }).then((res) => {
          axios.get(`${api}/api/${apiRoute}/get-data`, {
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
    <Box pl={'300px'} h={'92vh'} w={'100%'}>
        <Box w={'95%'} m={'0 auto'} pt={'40px'}>
        <Text fontSize={"30px"} fontWeight={"700"}>
		  Get product for gamers
		  </Text>
        <Tabs pt={'30px'}>
            <TabList>
				<Tab onClick={() => setApiRoute('keyboard')}>Keyboard</Tab>
				<Tab onClick={() => setApiRoute('mouses')}>Mouse</Tab>
				<Tab onClick={() => setApiRoute('accessories')}>Accessory</Tab>
				<Tab onClick={() => setApiRoute('laptops')}>Laptop</Tab>
				<Tab onClick={() => setApiRoute('videoCards')}>VideoCard</Tab>
				<Tab onClick={() => setApiRoute('monitors')}>Monitor</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
                 <GamersGet link={'keyboard'} data={data} loading={loading} handleDelete={handleDelete}/>
				</TabPanel>
				<TabPanel>
                <GamersGet link={'mouses'} data={data} loading={loading} handleDelete={handleDelete}/>
				</TabPanel>
				<TabPanel>
                <GamersGet link={'accessories'} data={data} loading={loading} handleDelete={handleDelete}/>
				</TabPanel>
				<TabPanel>
                <GamersGet link={'laptops'} data={data} loading={loading} handleDelete={handleDelete}/>
				</TabPanel>
				<TabPanel>
                <GamersGet link={'videoCards'} data={data} loading={loading} handleDelete={handleDelete}/>
				</TabPanel>
				<TabPanel>
                <GamersGet link={'monitors'} data={data} loading={loading} handleDelete={handleDelete}/>
				</TabPanel>
			</TabPanels>
			</Tabs>
        </Box>
    </Box>
  )
}

export default CategoryForGamersGet
