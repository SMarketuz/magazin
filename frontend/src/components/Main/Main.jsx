import { Box, Card, CardBody, CardFooter, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'
import { SiAcer, SiApple, SiAsus, SiLenovo, SiSamsung, SiSony, SiXiaomi } from "react-icons/si";
import './Main.css'
import { GrHpi } from 'react-icons/gr';
import Marquee from 'react-fast-marquee'
import { avatar, image, nature } from '../../assets';
import { FaStar } from 'react-icons/fa';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


export default function Main() {
    return (
        <Box mt={90}>

            {/* for partner  */}
            <Box>
                <Marquee direction='left' >
                    <Box className='image_marquee'>
                        <GrHpi size={50} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiSamsung size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiLenovo size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiAsus size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiAcer size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiSony size={70} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiXiaomi size={50} />
                    </Box>
                    <Box className='image_marquee'>
                        <SiApple size={50} />
                    </Box>
                </Marquee>
            </Box>

            {/* for comentariya  */}
            <Box>
               
            </Box>
            {/* for novosti  */}
            <Box mt={20} >
                <Text fontSize='28px' fontWeight='600' color='#333'>Yangiliklar</Text>
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
                        <SwiperSlide>
                            <Card maxW='sm' mb='10px'>
                                <CardBody>
                                    <Image
                                        src={nature}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>O'yin uchun yangi stullar</Heading>
                                        <Text>
                                            This sofa is perfect for modern tropical spaces, baroque inspired
                                            spaces, earthy toned spaces and for people who love a chic design with a
                                            sprinkle of vintage design.
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <Text display='flex' alignItems='center' gap={2} className='btn' color='#01579B'><span>Ko'proq Ko'rish</span></Text>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        {/* 2 */}
                        <SwiperSlide>
                            <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                        src={nature}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>O'yin uchun yangi stullar</Heading>
                                        <Text>
                                            This sofa is perfect for modern tropical spaces, baroque inspired
                                            spaces, earthy toned spaces and for people who love a chic design with a
                                            sprinkle of vintage design.
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <Text display='flex' alignItems='center' gap={2} className='btn' color='#01579B'><span>Ko'proq Ko'rish</span></Text>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        {/* 3 */}
                        <SwiperSlide>
                            <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                        src={nature}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>O'yin uchun yangi stullar</Heading>
                                        <Text>
                                            This sofa is perfect for modern tropical spaces, baroque inspired
                                            spaces, earthy toned spaces and for people who love a chic design with a
                                            sprinkle of vintage design.
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <Text display='flex' alignItems='center' gap={2} className='btn' color='#01579B'><span>Ko'proq Ko'rish</span></Text>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        {/* 4 */}
                        <SwiperSlide>
                            <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                        src={nature}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>O'yin uchun yangi stullar</Heading>
                                        <Text>
                                            This sofa is perfect for modern tropical spaces, baroque inspired
                                            spaces, earthy toned spaces and for people who love a chic design with a
                                            sprinkle of vintage design.
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <Text display='flex' alignItems='center' gap={2} className='btn' color='#01579B'><span>Ko'proq Ko'rish</span></Text>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    </Box>
                </Swiper>
            </Box>
        </Box>
    )
}
