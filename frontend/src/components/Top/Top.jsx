import { Alert, Badge, Box, Button, Img, Text, useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './Top.css'
import { PiScalesThin } from 'react-icons/pi';
import { FaRegHeart } from 'react-icons/fa';
import { tv } from '../../assets';
import { FaArrowRightLong } from "react-icons/fa6";
export default function Top() {
  const [toast, setToast] = useState(false);


  const handleBuy = () => {
    setToast(true)
    setTimeout(() => {
      setToast(false)
    }, 2000);
  }
  return (

    <Box>
      {/* swipper 1 */}
      <Box mt={{ xl: '70px', md: '210px', base: '70px' }}>
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
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
            {/* 2 */}
            <SwiperSlide>
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
            {/* 3 */}
            <SwiperSlide>
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
            {/* 4 */}
            <SwiperSlide>
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
            {/* 5 */}
            <SwiperSlide>
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
            {/* 6 */}
            <SwiperSlide>
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </center>
      </Box>

      <Box display='flex' alignItems='center' color='#01579B' fontWeight='500' justifyContent={{ xl: 'end', base: 'center' }} mt={12} >Смотреть все товары<FaArrowRightLong /></Box>

      {/* swipper 2 */}
      <Box mt={{ xl: '20px', md: '210px', base: '70px' }}>
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
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
            {/* 2 */}
            <SwiperSlide>
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
            {/* 3 */}
            <SwiperSlide>
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
            {/* 4 */}
            <SwiperSlide>
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
            {/* 5 */}
            <SwiperSlide>
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
            {/* 6 */}
            <SwiperSlide>
              <Box display='flex' flexDirection='column' gap={4} width='272px' padding='10px' boxShadow=' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Badge colorScheme='red'>Top Mahsulot🔥</Badge>
                  <Box display='flex' alignItems='center' gap={2}>
                    <PiScalesThin size={30} style={{ color: '#01579B' }} />
                    <FaRegHeart size={25} style={{ color: '#01579B' }} />
                  </Box>
                </Box>
                <Img src={tv} position='relative' />
                <Box textAlign='start'>
                  <Text fontSize='16px' color='#333' fontWeight='500' >Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</Text>
                  <Text fontSize='14px' color='#999' fontWeight='400'>Sharhlar: 0</Text>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Text color='#060F42' fontSize='18px' fontWeight='700'>3500грн</Text>
                  <Button bg='#06A56C' onClick={handleBuy} color='white'>Xarid Qilmoq</Button>
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </center>
      </Box>

      {toast && (<Alert sx={{ position: 'fixed', zIndex: '1000', bottom: '0', left: '0', borderRadius: '8px', w: '400px', bg: '#2FF924', color: 'white' }}>
        Siz bu mahsulotni savatga qo'shidingiz
      </Alert>)}
    </Box>
  )
}
