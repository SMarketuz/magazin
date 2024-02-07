import { Box, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Footer from '../../components/Footer';
import {  laptop, } from '../../assets';
import './ProductPage.css'
import Navbar from '../../components/Navbar';
import { CiStar } from 'react-icons/ci';
import Tolov from './Tolov';
import Narx from './Narx';
import Charakter from './charakter';
import ProductAbout from './ProductAbout';
import ProductComent from './ProductComent';

export default function ProductPage() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Box>
            <Navbar />

            <Box mt='70px' px='60px' mb='20px' width='100%'>
                <Text fontSize={{ md: '32px', base: '18px' }} color='#333' fontWeight='600'>Asus Rog Zepyhrus DUO16 (A162-B142model)</Text>
                <Box display='flex' alignItems='center' justifyContent='space-between' w={{ md: '18%', base: '100%' }}>
                    <Box display='flex' alignItems='center'><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /></Box>
                    <Text color='gray'>Ko'rilgan: 128</Text>
                </Box>
            </Box>


            <Box display='flex' alignItems='center' w='90%' m='auto' justifyContent='space-between' flexDirection={{ xl: 'inherit', md: 'column', base: 'column' }}>
                {/* fro view img and prics  */}
                <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>

                    {/* swipper */}
                    <Box width={{ md: '600px', base: '300px' }} className='swip_parent' >
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img className='size_imgg' src={laptop} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='size_imgg' src={laptop} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='size_imgg' src={laptop} />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img className='size_img' src={laptop} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='size_img' src={laptop} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='size_img' src={laptop} />
                            </SwiperSlide>
                        </Swiper>
                    </Box>

                    <Charakter />
                </Box>

                <Box display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
                    <Narx />

                    <Tolov />
                </Box>
            </Box>

            <Box display='flex' alignItems='start' justifyContent='space-between' width='95%' m={'auto'} flexDirection={{ md: 'inherit', base: 'column' }} mt='70px'>
                <ProductAbout />

                <ProductComent />
            </Box>


            <Footer />
        </Box>
    )
}
