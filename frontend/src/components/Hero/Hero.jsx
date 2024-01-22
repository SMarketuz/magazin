import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
import './Hero.css'
import 'swiper/css/navigation';
import { Box, Text } from '@chakra-ui/react'
import { FiSmartphone } from "react-icons/fi";
import { PiMonitorLight, PiPrinterLight, PiSpeakerHifiBold } from "react-icons/pi";
import { GiProcessor, GiLaptop, GiPriceTag, GiAchievement } from "react-icons/gi";
import { IoIosArrowForward, IoIosLaptop } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaComputer, FaHandshake, FaScrewdriverWrench } from "react-icons/fa6";
import { CgData } from "react-icons/cg";
import { FaCar, FaAddressCard } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { banner } from '../../assets';


export default function Hero() {
    return (
        <Box display='flex' mt={{ xl: '35px', md: '0px' }} justifyContent='space-around' alignItems='start'>
            {/* for texts  */}
            <Box display={{ xl: 'flex', md: 'none', base: 'none' }} flexDirection='column' gap='12px' className='texts'>
                {/* 1 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><GiProcessor size={25} /><Text fontSize='17px' fontWeight={600}>Kopmlekt PC</Text></Box><IoIosArrowForward /></Box>
                {/* 2 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><PiMonitorLight size={25} /><Text fontSize='17px' fontWeight={600}>Ekran</Text></Box><IoIosArrowForward /></Box>
                {/* 3 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><FaComputer size={25} /><Text fontSize='17px' fontWeight={600}>Kompyuter</Text></Box><IoIosArrowForward /></Box>
                {/* 4 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><IoIosLaptop size={25} /><Text fontSize='17px' fontWeight={600}>Noutbook</Text></Box><IoIosArrowForward /></Box>
                {/* 5 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><IoGameControllerOutline size={25} /><Text fontSize='17px' fontWeight={600}>O'yin Pulti</Text></Box><IoIosArrowForward /></Box>
                {/* 6 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><GiLaptop size={25} /><Text fontSize='17px' fontWeight={600}>Komplekt Noutbook</Text></Box><IoIosArrowForward /></Box>
                {/* 7 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><FiSmartphone size={25} /><Text fontSize='17px' fontWeight={600}>Planshet</Text></Box><IoIosArrowForward /></Box>
                {/* 8 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><PiPrinterLight size={25} /><Text fontSize='17px' fontWeight={600}>Printerlar</Text></Box><IoIosArrowForward /></Box>
                {/* 9 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><PiSpeakerHifiBold size={25} /><Text fontSize='17px' fontWeight={600}>Akustik Kolokanlar</Text></Box><IoIosArrowForward /></Box>
                {/* 10 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><CgData size={25} /><Text fontSize='17px' fontWeight={600}>Tarmoq Apparati</Text></Box><IoIosArrowForward /></Box>
                {/* 11 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><CgData size={25} /><Text fontSize='17px' fontWeight={600}>Tarmoq Apparati</Text></Box><IoIosArrowForward /></Box>
                {/* 12 */}
                <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}><CgData size={25} /><Text fontSize='17px' fontWeight={600}>Tarmoq Apparati</Text></Box><IoIosArrowForward /></Box>
            </Box>

            {/* for swipper  */}
            <Box className='carusel' w={{ xl: '76%', md: '100%', base: '100%' }} >
                {/* for big img  */}
                <Box>
                    <Swiper

                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                    </Swiper>
                </Box>

                {/* for small img cards  */}
                <Box mt='80px'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={true}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><FaScrewdriverWrench size={45} /><Text fontSize='15px' color='#060F42'>Tekin Texnika Tuzatish</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><FaHandshake size={45} /><Text fontSize='15px' color='#060F42'>Toʻlov 4oy 0% kredit</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><FaCar size={45} /><Text fontSize='15px' color='#060F42'>Tekin Dostavka</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><FaAddressCard size={45} /><Text fontSize='15px' color='#060F42'>Rasmiy kafolat</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><GiPriceTag size={45} /><Text fontSize='15px' color='#060F42'>Arzon Narx</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><GiAchievement size={45} /><Text fontSize='15px' color='#060F42'>11 yildan Bozorda</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><FcManager size={45} /><Text fontSize='15px' color='#060F42'>Professional Maslahat</Text></SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
        </Box>
    )
}
