import { Box, Text, Divider, Image } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './Game.css'
import { besttv, cursor, key, kuller, laptop, videokarta } from '../../assets';
import { Link } from 'react-router-dom';

export default function Game() {


    return (
        <Box className='background' mt='70px'>
            {/* top text  */}
            <Box position='relative' display='flex' justifyContent='space-between' alignItems='center' padding='8'>
                <Divider width='12%' />
                <Text color='white' fontSize={{ xl: '35px', md: '25px', base: '26px' }} textAlign={{ md: 'inherit', base: 'center' }} fontWeight='500'>Geymerlar uchun Mahsulotlar</Text>
                <Divider width='52%' />
            </Box>

            {/* kate3gory . */}
            <Box position='relative' px='50px'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1224: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1250: {
                            slidesPerView: 6,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {/* 1 */}
                    <SwiperSlide>
                        <Link to='/keyboard'>
                            <Box display='flex' alignItems='center' flexDirection='column'>
                                <Box background='white' width='180px' height='180px' borderRadius='50%' className='child_card'>
                                    <Image src={key} width='150px' transform='scale(1.50) rotate(2deg)' pt='30px' />
                                </Box>
                                <Text fontSize='18px' color='white' >Klaviatura</Text>
                            </Box>
                        </Link>
                    </SwiperSlide>
                    {/* 2 */}
                    <SwiperSlide>
                        <Link to='/mouses'>
                            <Box display='flex' alignItems='center' flexDirection='column'>
                                <Box background='white' width='180px' height='180px' borderRadius='50%' className='child_card'>
                                    <Image src={cursor} width='150px' transform='scale(1.50) rotate(2deg)' pt='30px' />
                                </Box>
                                <Text fontSize='18px' color='white' >Sichqoncha</Text>
                            </Box>
                        </Link>
                    </SwiperSlide>
                    {/* 3 */}
                    <SwiperSlide>
                        <Link to='/aksesuar'>
                            <Box display='flex' alignItems='center' flexDirection='column'>
                                <Box background='white' width='180px' height='180px' borderRadius='50%' className='child_card'>
                                    <Image src={kuller} width='150px' transform='scale(1.50) rotate(2deg)' pt='30px' />
                                </Box>
                                <Text fontSize='18px' color='white' >Aksesuarlar</Text>
                            </Box>
                        </Link>
                    </SwiperSlide>
                    {/* 4 */}
                    <SwiperSlide>
                        <Link to='/laptop'>
                            <Box display='flex' alignItems='center' flexDirection='column'>
                                <Box background='white' width='180px' height='180px' borderRadius='50%' className='child_card'>
                                    <Image src={laptop} width='230px' transform='scale(1.60) rotate(1deg)' pt='30px' />
                                </Box>
                                <Text fontSize='18px' color='white' >O'yin Noutbook</Text>
                            </Box></Link>
                    </SwiperSlide>
                    {/* 5 */}
                    <SwiperSlide>
                        <Link to='/videokarta'>
                            <Box display='flex' alignItems='center' flexDirection='column'>
                                <Box background='white' width='180px' height='180px' borderRadius='50%' className='child_card'>
                                    <Image src={videokarta} width='150px' transform='scale(1.50) rotate(2deg)' pt='30px' />
                                </Box>
                                <Text fontSize='18px' color='white' >Videokarta</Text>
                            </Box>
                        </Link>
                    </SwiperSlide>
                    {/* 6 */}
                    <SwiperSlide>
                        <Link to='/monitor'>
                            <Box display='flex' alignItems='center' flexDirection='column'>
                                <Box background='white' width='180px' height='180px' borderRadius='50%' className='child_card'>
                                    <Image src={besttv} width='130px' transform='scale(1.50) rotate(2deg)' pt='30px' />
                                </Box>
                                <Text fontSize='18px' color='white' >Monitor</Text>
                            </Box>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    )
}
