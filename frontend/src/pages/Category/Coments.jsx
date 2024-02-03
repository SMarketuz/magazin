import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Category.css'
import { avatar } from '../../assets';
import { FaStar } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Coments() {
    return (
        <Box>
            <Navbar />

            <Box m='auto' maxW='1460px'>
                <Box mt={10} >
                    <Text fontSize='36px' fontWeight='700' mb={35} color='#333'>IZOHLAR</Text>

                    <Box display='flex' alignItems='center' justifyContent='space-between' gap='40px' flexDirection={{ xl: 'inherit', md: 'column', base: 'column' }}>
                        {/* 1 */}
                        <Box w={{ md: '480px', base: '100%' }} className='zigzag' padding='10px'>
                            <Box display={'flex'} alignItems='start' gap='10px' >
                                <img src={avatar} alt="" />
                                <Box>
                                    <Text fontSize='18px' fontWeight='600'>Palonchi Pistonchi</Text>
                                    <Text pt={'10px'} width={{ md: '100%', base: '300px' }} mb='20px'>Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации </Text>
                                    <Box pt={'10px'} display='flex' alignItems='center' justifyContent='space-between' w={{ md: '90%', base: '50%' }}>
                                        <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                        <Text>2.02.2024</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        {/* 2 */}
                        <Box w={{ md: '480px', base: '100%' }} className='zigzag' padding='10px'>
                            <Box display={'flex'} alignItems='start' gap='10px' >
                                <img src={avatar} alt="" />
                                <Box>
                                    <Text fontSize='18px' fontWeight='600'>Palonchi Pistonchi</Text>
                                    <Text pt={'10px'} width={{ md: '100%', base: '300px' }} mb='20px'>Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации </Text>
                                    <Box pt={'10px'} display='flex' alignItems='center' justifyContent='space-between' w={{ md: '90%', base: '50%' }}>
                                        <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                        <Text>2.02.2024</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        {/* 3 */}
                        <Box w={{ md: '480px', base: '100%' }} className='zigzag' padding='10px'>
                            <Box display={'flex'} alignItems='start' gap='10px' >
                                <img src={avatar} alt="" />
                                <Box>
                                    <Text fontSize='18px' fontWeight='600'>Palonchi Pistonchi</Text>
                                    <Text pt={'10px'} width={{ md: '100%', base: '300px' }} mb='20px'>Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации </Text>
                                    <Box pt={'10px'} display='flex' alignItems='center' justifyContent='space-between' w={{ md: '90%', base: '50%' }}>
                                        <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                        <Text>2.02.2024</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    
                    <Box display='flex' alignItems='center' justifyContent='center' mt='40px'>
                        <Button>Yana</Button>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box>
    )
}
