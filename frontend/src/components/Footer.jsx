import { Box, Button, Divider, Heading, Input, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp, FaTelegramPlane, FaYoutube, FaLinkedin, FaCcMastercard, FaCcVisa, } from "react-icons/fa";
import { logo } from '../assets';

export default function Footer() {
    return (
        <Box background='#060F42' padding='20px' mt='40px' >
            {/* first  */}
            <Box display='flex' justifyContent='space-around' color='white' flexDirection={{ xl: 'inherit', md: 'column', base: 'column' }}>
                {/* 1 */}
                <Box display='flex' alignItems='start' flexDirection='column' gap='10px'>
                    <Heading fontSize='30px'>Ma'lumot</Heading>
                    <Text fontSize='12px'>Aksiya</Text>
                    <Text fontSize='12px'>Kredit</Text>
                    <Text fontSize='12px'>To'lov va Dostavka</Text>
                    <Text fontSize='12px'>Garantiya</Text>
                    <Text fontSize='12px'>Murojat qilish</Text>
                    <Text fontSize='12px'>Yangiliklar</Text>
                    <Text fontSize='12px'>Blog</Text>
                    <Text fontSize='12px'>Biz Haqimizda</Text>
                    <Text fontSize='12px'>Maxfiylik siyosati</Text>
                    <Text fontSize='12px'>Bog'lanish</Text>
                </Box>
                {/* 2 */}
                <Box display='flex' alignItems='start' flexDirection='column' gap='15px'>
                    <Heading fontSize='30px'>Xizmatlar</Heading>
                    <Text fontSize='12px'></Text>
                    <Text fontSize='12px'>Magazindagi Tovarlar</Text>
                    <Text fontSize='12px'>Скупка Б/У </Text>
                    <Text fontSize='12px'>Almashtirib berish va Texnik xizmatlar</Text>
                    <Text fontSize='12px'>Kompyuter yordami</Text>
                    <Text fontSize='12px'>Hamkorlik</Text>
                    <Text fontSize='12px'>Hammasi</Text>
                </Box>
                {/* 3 */}
                <Box display='flex' alignItems='start' flexDirection='column' gap='15px'>
                    <Heading fontSize='30px'>Aloqa</Heading>
                    <Text fontSize='12px'>+998 (91) 041-14-25 - Savdo bo'limi</Text>
                    <Text fontSize='12px'>+998 (91) 041-14-25 - Savdo bo'limi</Text>
                    <Text fontSize='12px'>+998 (91) 041-14-25 - Savdo bo'limi</Text>
                    <Text fontSize='12px'>Uzbekistan, Fergana, Quva DataSpin Academy <br /> near Idea shopping center</Text>
                    <Text fontSize='12px'>Dushanba-Juma: 9:00-19:00 <br /> Shanba-Yakshanba: 9:00-16:00</Text>
                </Box>
                {/* 4 */}
                <Box display='flex' alignItems='center' flexDirection='column' gap='20px' mt={{ xl: '0', md: '0', base: '70px' }}>
                    <Box display='flex' alignItems='center'   gap='20px' flexDirection='column'>
                        <Text>Bizni Bu yerda Ham Kuzatishingiz mumkin</Text>
                        <Box display='flex' alignItems='center'  justifyContent='space-between' w='100%' >
                            <Tooltip hasArrow label='Instagram' bg='red.600'>
                                <Button bg='white' color='#C32ACE' borderRadius='50%' width='40px' padding='8px'><FaInstagram style={{ width: '40px', height: '40px' }} /></Button>
                            </Tooltip>
                            <Tooltip hasArrow label='Facebook' bg='red.600'>
                                <Button bg='white' color='#0E68CE' borderRadius='50%' width='40px' padding='8px'><FaFacebook style={{ width: '40px', height: '40px' }} /></Button>
                            </Tooltip>
                            <Tooltip hasArrow label='Telegram' bg='red.600'>
                                <Button bg='white' color='#3182CE' borderRadius='50%' width='40px' padding='8px'><FaTelegramPlane style={{ width: '40px', height: '40px' }} /></Button>
                            </Tooltip>
                            <Tooltip hasArrow label='You Tube' bg='red.600'>
                                <Button bg='white' color='red' borderRadius='50%' width='40px' padding='8px'><FaYoutube style={{ width: '40px', height: '40px' }} /></Button>
                            </Tooltip>
                            <Tooltip hasArrow label='Instagram' bg='red.600'>
                                <Button bg='white' color='#0E68CE' borderRadius='50%' width='40px' padding='8px'><FaLinkedin style={{ width: '40px', height: '40px' }} /></Button>
                            </Tooltip>
                            <Tooltip hasArrow label='Whatsapp' bg='red.600'>
                                <Button bg='white' color='green' borderRadius='50%' width='40px' padding='8px'><FaWhatsapp style={{ width: '40px', height: '40px' }} /></Button>
                            </Tooltip>
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='start' gap='25px' flexDirection='column' mt='25px'>
                        <Text>Chegirmalarga obuna bo'ling</Text>
                        <Box display='flex' alignItems='center' background='white' width={{ xl: '360px', md: '360px', base: '250px' }}>
                            <Input variant='unstyled' color='black' flex='1 0 0' padding='8px' borderRadius='6px' placeholder='Emailingizni Kiriting...' />
                            <FaTelegramPlane size={25} style={{ color: '#01579B' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* second  */}
            <Box mt={{ xl: '0', md: '0', base: '70px' }}>
                <Divider />
                <Box display='flex' alignItems='center' justifyContent='space-between' padding='20px'>
                    <Box display='flex' alignItems={{xl:'center', base:'start'}} gap='10px' flexDirection={{ xl: 'inherit', md: 'column', base: 'column' }}>
                        <img src={logo} alt="" />
                        <Text color='white' fontSize='12px' w={{xl:'100%', base:'70%'}}>2024-2030 Bu Internat Do'koni Eng Ishonchili Va Hafsiz</Text>
                    </Box>
                    <Box display='flex ' alignItems='center' gap='10px'flexDirection={{xl:'none', base:'column'}} >
                        <FaCcMastercard size={40} color='white' />
                        <FaCcVisa size={40} color='white' />
                    </Box>
                </Box>
                <Divider />
            </Box>
        </Box>
    )
}
