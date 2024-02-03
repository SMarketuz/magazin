import { Badge, Box, Button, Card, CardBody, CardFooter, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import { api } from '../../api'
import { FaRegHeart, FaStar } from 'react-icons/fa';
import Modal from '../../components/Modal';

export default function KeyBoards() {
  const [data, setData] = useState([])
  const toast = useState()

  useEffect(() => {
    axios.get(`${api}api/keyboard/get-data`, {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then((res) => {
        setData(res.data)
      })
  }, [api])
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
    <Box>
      <Navbar />
      <Box mt={20} >
        <Text fontSize='28px' fontWeight='600' color='#333'>Klaviaturalar</Text>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >

          <Box display='flex' alignItems='center' justifyContent='space-between'>
            {/* 1 */}
            {data.map((item) => (
              <Box display='flex' flexDirection='column' gap={4} width='302px' padding='10px' mb='2px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box display='flex' alignItems='center' w='100%' justifyContent='end' gap={2}>
                    <FaRegHeart  size={30} style={{ color: 'red', position:'absolute', marginTop:'70px', zIndex:'999' }} />
                  </Box>
                </Box>
                <Img src={item.image} height='300px' objectFit='cover' position='relative'  />
                <Box textAlign='start'>
                  <Text fontSize='20px' color='#333' fontWeight='500'>{item.name}</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                  <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box textAlign={'start'}>
                    <Text color='#060F42' fontSize='18px' fontWeight='700'>{item.cost}</Text>
                  </Box>
                  <Modal/>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Swiper>
      </Box>
      <Footer />
    </Box>
  )
}
