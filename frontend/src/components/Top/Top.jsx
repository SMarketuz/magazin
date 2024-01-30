import { Alert, Badge, Box, Button, Img, Text, Toast, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './Top.css'
import { PiScalesThin } from 'react-icons/pi';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { tv } from '../../assets';
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';
import { api } from '../../api';
import Skeleton from '../skeleton';
export default function Top() {
  const toast = useToast()
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)


  useEffect(() => {
    axios.get(`${api}api/product/get-data`, {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then((res) => {
        setData(res.data)
        setLoader(false)
      })
  }, [api]);

  const handleBuy = () => {
    toast({
      description: 'Mahsulot Qo\'shildi',
      position: 'top-right',
      isClosable: true,
      status: 'success',
      duration: '4000'
    })
  }
  return (

    <Box mt={{ md: '90px', base: '0' }}>
      <Box display='flex' alignItems={{ md: 'center', base: 'start' }} mt={{ md: '0', base: '70px' }} mb={{ md: '0', base: '40px' }} flexDirection={{ md: 'inherit', base: 'column' }} justifyContent='space-between' >
        <Text fontSize='40px' fontWeight='700'>Top Mahsulotlar</Text>
        <Text color='#01579B' display='flex' alignItems='center' gap={2} fontWeight='500'>Смотреть все товары<FaArrowRightLong /></Text>
      </Box>

      {/* swipper 1 */}
      <center>
        {loader ? <Skeleton size={'270px'} /> :
          <Box mb={{ md: '20px', base: '70px' }} display='flex' alignItems='center' justifyContent='space-between' overflowY='scroll'>
            {/* 1 */}
            {data.slice(0, 5).map((item) => (
              <Box display='flex' flexDirection='column' gap={4} width='252px' padding='10px' mb='2px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>{item.badge == 'gold' || item.badge == 'Gold' ? 'Gold Product' : 'Bronze Product'}</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={item.image} height='250px' objectFit='cover' position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='20px' color='#333' fontWeight='500'>{item.name}</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                  <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box textAlign={'start'}>
                    <Text fontSize='14px' color='red' textDecoration='line-through'>{item.originalCost}</Text>
                    <Text color='#060F42' fontSize='18px' fontWeight='700'>{item.currentCost}</Text>
                  </Box>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            ))}
          </Box>
        }
      </center>




    </Box>
  )
}
