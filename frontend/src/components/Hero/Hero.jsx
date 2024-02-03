import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
import './Hero.css'
import 'swiper/css/navigation';
import { Box, Button, Text } from '@chakra-ui/react'
import { PiMonitorLight, PiSpeakerHifiBold } from "react-icons/pi";
import { GiLaptop, GiPriceTag, GiAchievement } from "react-icons/gi";
import { IoIosLaptop } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaComputer, FaHandshake, FaScrewdriverWrench } from "react-icons/fa6";
import { CgData } from "react-icons/cg";
import { FaPassport, FaKeyboard } from "react-icons/fa";
import { FcElectronics, FcInTransit, FcOnlineSupport, FcPrint, FcTabletAndroid } from "react-icons/fc";
import Word from '../Text';
import { CiDesktopMouse2 } from "react-icons/ci";
import { api } from '../../api';
import axios from 'axios'
import Loader from '../loader/Loader';

export default function Hero() {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        axios.get(`${api}api/carusel/image/get`, {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then((res) => {
                setData(res.data.data)
                setLoader(false)
            })
    }, [api]);
    return (
        <Box display='flex' mt={{ xl: '35px', md: '0px' }} justifyContent='space-around' alignItems='start'>

            {/* for texts  */}
            <Box display={{ xl: 'flex', md: 'none', base: 'none' }} flexDirection='column' gap='12px' className='texts' >
                {/* 1 */}
                <Word icon={<FcElectronics size={25} />} text={'PC Komplekt'} />
                <Word icon={<PiMonitorLight size={25} color='#3182CE' />} text={'Ekran'} />
                <Word icon={<FaComputer size={25} color='#3182CE' />} text={'Kompyuter'} />
                <Word icon={<IoIosLaptop size={25} color='gray' />} text={'Noutbook'} />
                <Word icon={<IoGameControllerOutline size={25} color='red' />} text={"O'yin Pulti"} />
                <Word icon={<GiLaptop size={25} />} text={'Komplekt Noutbook'} />
                <Word icon={<FcTabletAndroid size={25} />} text={'Planshet'} />
                <Word icon={<FcPrint size={25} />} text={'Printerlar'} />
                <Word icon={<PiSpeakerHifiBold size={25} />} text={'Akustik Kolokanlar'} />
                <Word icon={<CgData size={25} color='green' />} text={'Tarmoq Apparati'} />
                <Word icon={<FaKeyboard size={25} />} text={'Klaviatura'} />
                <Word icon={<CiDesktopMouse2 size={25} color='' />} text={'Sichqoncha'} />
            </Box>

            <Box className='carusel' w={{ xl: '76%', md: '100%', base: '100%' }} >
                {/* for big img  */}
                {loader ? <Loader /> :
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
                            {data && data.map((item) => (
                                <Box>
                                    <SwiperSlide>
                                        <Box position='absolute' display='flex' alignItems='start' textAlign='start' justifyContent='start' flexDirection={'column'} top='50px' left='50px' zIndex='999' lineHeight={{ md: '60px', base: '50px' }} >
                                            <Text fontSize='48px' fontWeight='700' color='white'>{item.title}</Text>
                                            <Text fontSize='18px' fontWeight='500' textAlign={'left'} color={'white'}>{item.desc}</Text>
                                            <Button bg='#E93232' width='165px' height='43px' _hover='none' color='white'>Ko'rish</Button>
                                        </Box>
                                        <img className='image' src={item.url} alt="" />
                                    </SwiperSlide>
                                </Box>
                            ))}
                        </Swiper>
                    </Box>}


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
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><FaScrewdriverWrench size={45} color='#AAABAD' /><Text fontSize='15px' color='#060F42'>Tekin Texnika Tuzatish</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><FaHandshake size={45} color='#FDC2A4' /><Text fontSize='15px' color='#060F42'>Toʻlov 4oy 0% kredit</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><FcInTransit size={45} /><Text fontSize='15px' color='#060F42'>Tekin Dostavka</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><FaPassport size={45} color='#D15B5B' /><Text fontSize='15px' color='#060F42'>Rasmiy kafolat</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><GiPriceTag size={45} color='#F18D1F' /><Text fontSize='15px' color='#060F42'>Arzon Narx</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><GiAchievement size={45} color='#EFBD26' /><Text fontSize='15px' color='#060F42'>11 yildan Bozorda</Text></SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}><FcOnlineSupport size={45} /><Text fontSize='15px' color='#060F42'>Professional Maslahat</Text></SwiperSlide>
                    </Swiper>
                </Box>
            </Box>

        </Box>
    )
}
