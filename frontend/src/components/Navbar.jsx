import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Input, Text, Tooltip, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import Register from './Register';
import { FaBarsStaggered, FaPhoneVolume } from "react-icons/fa6";
import { line, logo } from '../assets';
import { PiScalesThin } from "react-icons/pi";
import { FaRegHeart, FaInstagram, FaFacebookF, FaTelegramPlane, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { GrAppsRounded } from 'react-icons/gr'
import { GoSearch } from 'react-icons/go';
import { IoSearchOutline } from "react-icons/io5";
import Shop from './Shop';
import { MdDeleteForever } from 'react-icons/md';
import { IoIosArrowDown } from "react-icons/io";
import Likes from './Likes';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState(false)
    const btnRef = React.useRef()

    const showinp = () => {
        setShow(true)
    }

    const hidewinp = () => {
        setShow(false)
    }


    return (
        <Box width='100%'>
            {/* for blue  */}
            <Box display={{ xl: 'flex', md: 'flex', base: 'none' }} width='100%' alignItems='center' justifyContent='space-between' px='125px' py='10px' bg='#060F42' color='white'>
                <Box display='flex' alignItems='center' gap='30px'>
                    <HiOutlineBars3 size={30} onClick={onOpen} ref={btnRef} style={{ cursor: 'pointer' }} />
                    <Link to='/'><Text>Bosh Saxifa</Text></Link>
                    <Link><Text>Aksiya</Text></Link>
                    <Link><Text>Kredit</Text></Link>
                    <Link><Text>To'lov va Yetkazib Berish</Text></Link>
                    <Link><Text>Yordam</Text></Link>
                    <Link><Text>Bog'lanish</Text></Link>
                </Box>
                <Box display='flex' alignItems='center' gap='2px' >
                    <Text opacity='0.7'>Ru</Text>
                    <Text>/</Text>
                    <Text>Uz</Text>
                    <Box pl='20px' cursor='pointer'>
                        <Register />
                    </Box>
                </Box>
            </Box>

            {/* for navbar  */}
            <Box display={{ md: 'flex', base: 'none' }} boxShadow=' 0px 4px 4px 0px rgba(0, 0, 0, 0.09)' alignItems='center' px='110px' justifyContent='space-evenly' paddingBottom='20px' mt='20px'>
                <img src={logo} alt="" />
                <Button display="flex" alignItems='center' bg='#06A56C' color='white' padding='9px 12px' gap={4} fontSize={{ xl: '18px', md: '15px', }} className="catalogbtn" border='none'><Text display={{ xl: 'block', md: 'none' }}>Tovarlar Bo'limi</Text><GrAppsRounded size={20} /></Button>
                <Box display='flex' alignItems='center' border='1px solid gray' >
                    <Input variant='unstyled' width={{ xl: '550px', md: '158px', base: '20px' }} pl='40px' placeholder="Qidirish" />
                    <Button colorScheme='blue' borderRadius='0px' color='white'><GoSearch size={25} /></Button>
                </Box>
                {/* telefon uchun  */}
                <Box className='phone_hover'>
                    <Text display='flex' alignItems='center' gap='2px'>+998(91) 041-14-25<IoIosArrowDown size={20} /></Text>
                    <Box className='phone_menu' display='none' >
                        <Text className='phone_icon'>+998(91) 041-14-25</Text>
                        <Text className='phone_icon'>+998(91) 041-14-25</Text>
                        <Text className='phone_icon'>+998(91) 041-14-25</Text>
                        <hr />
                        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='10px'>
                            <Text>Biz bilan Bog'laning</Text>
                            <Input placeholder='Ismingiz' />
                            <Input placeholder='Nomeringiz' />
                            <Button bg='#01579B' color='white'>Yuborish</Button>
                        </Box>
                    </Box>
                </Box>
                <img src={line} alt="" />
                {/* ayri boshlash  */}
                <Box display='flex' alignItems='center' justifyContent='space-between' w='10%'>
                    <Box width='100%' display='flex' alignItems='center' justifyContent='space-around'>
                        <Likes />
                        <Shop />
                    </Box>
                </Box>
            </Box>

            {/* for mobile nav  */}
            <Box>
                <Box bg='#060F42' display={{ md: 'none', base: 'flex' }} flexDirection='column' padding='20px' gap='20px'>
                    <Box display={{ md: 'none', base: 'flex' }} alignItems='center' color='white' justifyContent='space-around' onClick={hidewinp}>
                        <FaBarsStaggered ref={btnRef} onClick={onOpen} size={30} />
                        <img src={logo} alt="" />
                        <FaPhoneVolume size={30} />
                    </Box>
                    {show ?
                        <Box display='flex' alignItems='center' justifyContent='space-around'>
                            <Button display="flex" alignItems='center' bg='#06A56C' color='white' className="catalogbtn"><GrAppsRounded size={40} /></Button>
                            <Input placeholder='Search' color='white' type='search' />
                            <Shop />
                        </Box> :
                        <Box display='flex' alignItems='center' justifyContent='space-around'>
                            <Button display="flex" alignItems='center' bg='#06A56C' color='white' padding='9px 12px' gap={4} className="catalogbtn">КАТАЛОГ ТОВАРОВ<GrAppsRounded size={20} /></Button>
                            <IoSearchOutline size={40} color='white' onClick={showinp} />
                            <Shop />
                        </Box>}

                </Box>
                {/* for bars  */}
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size={{ md: 'sm', base: 'xs' }}
                >
                    <DrawerOverlay />
                    <DrawerContent bg='#060F42' color='white'>
                        <DrawerCloseButton />
                        <DrawerHeader><img src={logo} alt="" /></DrawerHeader>

                        <DrawerBody display='flex' flexDirection='column' justifyContent='start'>
                            <Register />
                            <Accordion allowToggle>
                                {/* 1 */}
                                <AccordionItem border='none' mt='20px'>
                                    <h2>
                                        <AccordionButton >
                                            <Box as="span" flex='1' textAlign='left'>
                                                Ma'lumot
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} lineHeight='45px'>
                                        <Text>Aksiya</Text>
                                        <Text>Kredit</Text>
                                        <Text>To'lov va Dostavka</Text>
                                        <Text>Garantiya</Text>
                                        <Text>Yangiliklar</Text>
                                        <Text>Bog'lanish</Text>
                                    </AccordionPanel>
                                </AccordionItem>

                                {/* 2 */}
                                <AccordionItem border='none'>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Biz haqimizda
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} lineHeight='30px'>
                                        <Text fontSize='20px'>Contact</Text>
                                        <Text>+998 (91) 041-14-25</Text>
                                        <Text>+998 (91) 041-14-25</Text>
                                        <Text>+998 (91) 041-14-25</Text>
                                        <Text fontSize='20px' pt='20px'>Manzil</Text>
                                        <Text>Uzbekistan, Fergana, Quva DataSpin Academy near Idea shopping center</Text>
                                    </AccordionPanel>
                                </AccordionItem>

                                <Text fontSize='20px' pt='40px' pb='20px'>Bizni Kuzating</Text>
                                <Box display='flex' alignItems='center' gap='10px'>
                                    <Tooltip hasArrow label='Instagram' bg='red.600'>
                                        <Button bg='white' color='#C32ACE' borderRadius='50%' width='40px' padding='8px'><FaInstagram style={{ width: '40px', height: '40px' }} /></Button>
                                    </Tooltip>
                                    <Tooltip hasArrow label='Facebook' bg='red.600'>
                                        <Button bg='white' color='#0E68CE' borderRadius='50%' width='40px' padding='10px'><FaFacebookF style={{ width: '40px', height: '40px' }} /></Button>
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
                                </Box>
                            </Accordion>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    )
}
