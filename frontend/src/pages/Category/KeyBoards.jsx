import { Box, Card, CardBody, CardFooter, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import { api } from '../../api'
import { nature } from '../../assets';

export default function KeyBoards() {
  const [data, setData] = useState([])

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
  console.log(data);
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

          <Box>
            {/* 1 */}
            {data.map((item) => (
              <SwiperSlide>
                <Card maxW='sm' mb='10px'>
                  <CardBody>
                    <Image
                      src={item.image}
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>{item.name}</Heading>
                      <Text>
                        {item.informationMax}
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Text display='flex' alignItems='center' gap={2} className='btn' color='#01579B'><span>Ko'proq Ko'rish</span></Text>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Box>
        </Swiper>
      </Box>
      <Footer />
    </Box>
  )
}
