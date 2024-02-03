import { Box, Text, Input, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../api/api'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateGamers = () => {
    const [values, setValues] = useState({ image: '', name: '', informationMin: '', informationMax: '', cost: '', rate: '' })
    const { id, name } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${api}/api/${name}/get-data-byId/${id}`, {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
            }
        }).then((res) => {
            setValues({ image: res.data.data[0].image, name: res.data.data[0].name, informationMin: res.data.data[0].informationMin, informationMax: res.data.data[0].informationMax, cost: res.data.data[0].cost, rate: res.data.data[0].rate })
        })
    }, [api])
    const preId = id
    const handleUpdate = (id) => {
        axios.post(`${api}/api/${name}/update-data/${preId}`,
        {
            image: values.image,
            badge: values.badge,
            name: values.name,
            informationMin: values.informationMin,
            informationMax: values.informationMax,
            cost: values.cost,
            rate: values.rate,
        },{
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
            }
        }).then((res) => {
            navigate('/admin/categoryForGamers-get')
        })
    }
   
    return (
        <Box pl={'300px'} h={'92vh'} w={'100%'}>
            <Box w={'95%'} m={'auto'} pt={'30px'}>
                <Text fontSize={'30px'} fontWeight={'700'}>Update Category</Text>
                <Box pt={'40px'} display={'flex'} alignItems={'center'} gap={'5rem'}>
                    <Box display={'flex'} flexDirection={'column'} gap={'1.5rem'}>
                        <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>Image</Text>
                        <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>Name</Text>
                        <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>InformationMin</Text>
                        <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>InformationMax</Text>
                        <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>Cost</Text>
                        <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>Rate</Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'1rem'} w={'100%'}>
                        <Input value={values.image} onChange={(e) => setValues({ ...values, image: e.target.value })} placeholder='image Url' w={'100%'} />
                        <Input value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} placeholder='product Name' w={'100%'} />
                        <Input value={values.informationMin} onChange={(e) => setValues({ ...values, informationMin: e.target.value })} placeholder='InformationMin' w={'100%'} />
                        <Input value={values.informationMax} onChange={(e) => setValues({ ...values, informationMax: e.target.value })} placeholder='InformationMax' w={'100%'} />
                        <Input value={values.cost} onChange={(e) => setValues({ ...values, cost: e.target.value })} placeholder='Original cost' w={'100%'} />
                        <Input value={values.rate} onChange={(e) => setValues({ ...values, rate: e.target.value })} placeholder='Rate' w={'100%'} />
                    </Box>

                </Box>
                <Box display={'flex'} alignItems={'right'} justifyContent={'right'}>
                    <Button onClick={handleUpdate} mt={'30px'} w={'100px'} h={'40px'} color={'white'} _hover={''} bg={'#4C4C4C'}>Send</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default UpdateGamers