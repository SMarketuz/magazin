import { Badge, Box, Button, Img, Text, Divider, Alert, Image } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { PiScalesThin } from 'react-icons/pi';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import './Game.css'
import { cursor, key } from '../../assets';

export default function Game() {
    const [toast, setToast] = useState(false)

    const handleBuy = () => {
        setToast(true)
        setTimeout(() => {
            setToast(false)
        }, 2000);
    }

    return (
        <Box className='background'>
            {/* top text  */}
            <Box position='relative' display='flex' justifyContent='space-between' alignItems='center' padding='8'>
                <Divider width='12%' />
                <Text color='white' fontSize={{ xl: '35px', md: '25px', base: '19px' }} fontWeight='500'>GAME ZONE</Text>
                <Divider width='52%' />
            </Box>

            {/* for cards  */}
            <Box mb={{ md: '20px', base: '70px' }} mx={'30px'}>
                <center>
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
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"
                    >
                        {/* 1 */}
                        <SwiperSlide>
                            <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' mb='2px' background='white' className='card'>
                                <Box display='flex' alignItems='center' justifyContent='end' gap={2}>
                                    <PiScalesThin size={30} style={{ color: '#01579B' }} className='icons' />
                                    <FaRegHeart size={25} style={{ color: '#01579B' }} className='icons' />
                                </Box>
                                <Img src={key} position='relative' className='image' />
                                <Box textAlign='start'>
                                    <Text fontSize='16px' color='#333' fontWeight='500' className='text'>Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                                    <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                                    <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='space-between'>
                                    <Box textAlign={'start'}>
                                        <Text fontSize='14px' color='red' textDecoration='line-through'>450,000</Text>
                                        <Text color='#060F42' fontSize='18px' fontWeight='700' className='text'>350,00sum</Text>
                                    </Box>
                                    <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        {/* 2 */}
                        <SwiperSlide>
                            <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' mb='2px' background='white' className='card'>
                                <Box display='flex' alignItems='center' justifyContent='end' gap={2}>
                                    <PiScalesThin size={30} style={{ color: '#01579B' }} className='icons' />
                                    <FaRegHeart size={25} style={{ color: '#01579B' }} className='icons' />
                                </Box>
                                <Img src={key} position='relative' className='image' />
                                <Box textAlign='start'>
                                    <Text fontSize='16px' color='#333' fontWeight='500' className='text'>Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                                    <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                                    <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='space-between'>
                                    <Box textAlign={'start'}>
                                        <Text fontSize='14px' color='red' textDecoration='line-through'>450,000</Text>
                                        <Text color='#060F42' fontSize='18px' fontWeight='700' className='text'>350,00sum</Text>
                                    </Box>
                                    <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        {/* 3 */}
                        <SwiperSlide>
                            <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' mb='2px' background='white' className='card'>
                                <Box display='flex' alignItems='center' justifyContent='end' gap={2}>
                                    <PiScalesThin size={30} style={{ color: '#01579B' }} className='icons' />
                                    <FaRegHeart size={25} style={{ color: '#01579B' }} className='icons' />
                                </Box>
                                <Img src={key} position='relative' className='image' />
                                <Box textAlign='start'>
                                    <Text fontSize='16px' color='#333' fontWeight='500' className='text'>Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                                    <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                                    <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='space-between'>
                                    <Box textAlign={'start'}>
                                        <Text fontSize='14px' color='red' textDecoration='line-through'>450,000</Text>
                                        <Text color='#060F42' fontSize='18px' fontWeight='700' className='text'>350,00sum</Text>
                                    </Box>
                                    <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        {/* 4 */}
                        <SwiperSlide>
                            <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' mb='2px' background='white' className='card'>
                                <Box display='flex' alignItems='center' justifyContent='end' gap={2}>
                                    <PiScalesThin size={30} style={{ color: '#01579B' }} className='icons' />
                                    <FaRegHeart size={25} style={{ color: '#01579B' }} className='icons' />
                                </Box>
                                <Img src={key} position='relative' className='image' />
                                <Box textAlign='start'>
                                    <Text fontSize='16px' color='#333' fontWeight='500' className='text'>Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                                    <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                                    <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='space-between'>
                                    <Box textAlign={'start'}>
                                        <Text fontSize='14px' color='red' textDecoration='line-through'>450,000</Text>
                                        <Text color='#060F42' fontSize='18px' fontWeight='700' className='text'>350,00sum</Text>
                                    </Box>
                                    <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        {/* 5 */}
                        <SwiperSlide>
                            <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' mb='2px' background='white' className='card'>
                                <Box display='flex' alignItems='center' justifyContent='end' gap={2}>
                                    <PiScalesThin size={30} style={{ color: '#01579B' }} className='icons' />
                                    <FaRegHeart size={25} style={{ color: '#01579B' }} className='icons' />
                                </Box>
                                <Img src={key} position='relative' className='image' />
                                <Box textAlign='start'>
                                    <Text fontSize='16px' color='#333' fontWeight='500' className='text'>Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                                    <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                                    <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='space-between'>
                                    <Box textAlign={'start'}>
                                        <Text fontSize='14px' color='red' textDecoration='line-through'>450,000</Text>
                                        <Text color='#060F42' fontSize='18px' fontWeight='700' className='text'>350,00sum</Text>
                                    </Box>
                                    <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        {/* 6 */}
                        <SwiperSlide>
                            <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' mb='2px' background='white' className='card'>
                                <Box display='flex' alignItems='center' justifyContent='end' gap={2}>
                                    <PiScalesThin size={30} style={{ color: '#01579B' }} className='icons' />
                                    <FaRegHeart size={25} style={{ color: '#01579B' }} className='icons' />
                                </Box>
                                <Img src={key} position='relative' className='image' />
                                <Box textAlign='start'>
                                    <Text fontSize='16px' color='#333' fontWeight='500' className='text'>Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                                    <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                                    <Box display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Box>
                                </Box>
                                <Box display='flex' alignItems='center' justifyContent='space-between'>
                                    <Box textAlign={'start'}>
                                        <Text fontSize='14px' color='red' textDecoration='line-through'>450,000</Text>
                                        <Text color='#060F42' fontSize='18px' fontWeight='700' className='text'>350,00sum</Text>
                                    </Box>
                                    <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </center>
            </Box>

            {/* kate3gory . */}
            <Text>Категории для геймеров</Text>
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
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {/* 1 */}
                    <SwiperSlide>
                        <Box display='flex' alignItems='center' flexDirection='column'>
                            <Box background='white' width='200px' height='200px' borderRadius='50%' className='child_card'>
                                <Image src={cursor} transform='scale(1.50) rotate(2deg)' pt='20px' />
                            </Box>
                            <Text fontSize='18px' color='white' >Sichqoncha</Text>
                        </Box>
                    </SwiperSlide>
                    {/* 2 */}
                    <SwiperSlide>
                        <Box display='flex' alignItems='center' flexDirection='column'>
                            <Box background='white' width='200px' height='200px' borderRadius='50%' className='child_card'>
                                <Image src={cursor} transform='scale(1.50) rotate(2deg)' pt='20px' />
                            </Box>
                            <Text fontSize='18px' color='white' >Sichqoncha</Text>
                        </Box>
                    </SwiperSlide>
                    {/* 3 */}
                    <SwiperSlide>
                        <Box display='flex' alignItems='center' flexDirection='column'>
                            <Box background='white' width='200px' height='200px' borderRadius='50%' className='child_card'>
                                <Image src={cursor} transform='scale(1.50) rotate(2deg)' pt='20px' />
                            </Box>
                            <Text fontSize='18px' color='white' >Sichqoncha</Text>
                        </Box>
                    </SwiperSlide>
                    {/* 4 */}
                    <SwiperSlide>
                        <Box display='flex' alignItems='center' flexDirection='column'>
                            <Box background='white' width='200px' height='200px' borderRadius='50%' className='child_card'>
                                <Image src={cursor} transform='scale(1.50) rotate(2deg)' pt='20px' />
                            </Box>
                            <Text fontSize='18px' color='white' >Sichqoncha</Text>
                        </Box>
                    </SwiperSlide>
                    {/* 5 */}
                    <SwiperSlide>
                        <Box display='flex' alignItems='center' flexDirection='column'>
                            <Box background='white' width='200px' height='200px' borderRadius='50%' className='child_card'>
                                <Image src={cursor} transform='scale(1.50) rotate(2deg)' pt='20px' />
                            </Box>
                            <Text fontSize='18px' color='white' >Sichqoncha</Text>
                        </Box>
                    </SwiperSlide>
                    {/* 6 */}
                    <SwiperSlide>
                        <Box display='flex' alignItems='center' flexDirection='column'>
                            <Box background='white' width='200px' height='200px' borderRadius='50%' className='child_card'>
                                <Image src={cursor} transform='scale(1.50) rotate(2deg)' pt='20px' />
                            </Box>
                            <Text fontSize='18px' color='white' >Sichqoncha</Text>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Box>

            {toast && (<Alert sx={{ position: 'fixed', zIndex: '1000', bottom: '0', left: '0', borderRadius: '8px', w: '400px', bg: '#2FF924', color: 'white' }}>
                Siz bu mahsulotni savatga qo'shidingiz
            </Alert>)}
        </Box>
    )
}
