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


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState(false)
    const showinp = () => {
        setShow(true)
    }
    const hidewinp = () => {
        setShow(false)
    }
    const btnRef = React.useRef()


    return (
        <Box>
            {/* for blue  */}
            <Box display={{ xl: 'flex', md: 'flex', base: 'none' }} alignItems='center' justifyContent='space-between' px='25px' py='10px' bg='#060F42' color='white'>
                <Box display='flex' alignItems='center' gap='30px'>
                    <HiOutlineBars3 size={30} onClick={onOpen} ref={btnRef} style={{ cursor: 'pointer' }} />
                    <Text>Aksiya</Text>
                    <Text>Kredit</Text>
                    <Text>To'lov va Yetkazib Berish</Text>
                    <Text>Yordam</Text>
                    <Text>Tovar Ayriboshlash</Text>
                    <Text>Bog'lanish</Text>
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
            <Box display={{ md: 'flex', base: 'none' }} boxShadow=' 0px 4px 4px 0px rgba(0, 0, 0, 0.09)' alignItems='center' px='20px' justifyContent='space-evenly' paddingBottom='20px' mt='20px'>
                <img src={logo} alt="" />
                <Button display="flex" alignItems='center' bg='#06A56C' color='white' padding='9px 12px' gap={4} fontSize={{ xl: '18px', md: '15px', }} className="catalogbtn" border='none'>Tovarlar Bo'limi<GrAppsRounded size={20} /></Button>
                <Box display='flex' alignItems='center' border='1px solid gray' >
                    <Input variant='unstyled' width={{ xl: '750px', md: '158px', base: '20px' }} pl='40px' placeholder="Qidirish" />
                    <Button colorScheme='blue' borderRadius='0px' color='white'><GoSearch size={25} /></Button>
                </Box>
                <Box className='phone_hover'>
                    <Text display='flex' alignItems='center' gap='2px'>+998(91) 041-14-25<IoIosArrowDown size={20}/></Text>
                    <Box className='phone_menu' display='none' >
                    <Text className='phone_icon'>+998(91) 041-14-25</Text>
                    <Text className='phone_icon'>+998(91) 041-14-25</Text>
                    <Text className='phone_icon'>+998(91) 041-14-25</Text>
                    <hr/>
                  <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='10px'>
                  <Text>Biz bilan Bog'laning</Text>
                    <Input placeholder='Ismingiz'/>
                    <Input placeholder='Nomeringiz'/>
                    <Button bg='#01579B' color='white'>Yuborish</Button>
                  </Box>
                    </Box>
                </Box>
                <img src={line} alt="" />
                <Box display='flex' alignItems='center' justifyContent='space-between' w='10%'>
                    <Box className='thin_hover'>
                        <PiScalesThin size={40} className='thin_icon' />
                        <Box className='thin'>
                            <Text>Ayriboshlash Ro'yxati</Text>
                            <Box display='flex' alignItems='center' justifyContent='space-between' className='thin_child'>
                                <Text>Monitor(2)</Text>
                                <MdDeleteForever size={20} className='del' />
                            </Box>
                            <Box display='flex' alignItems='center' justifyContent='space-between' className='thin_child'>
                                <Text>Monitor(2)</Text>
                                <MdDeleteForever size={20} className='del' />
                            </Box>
                            <Box display='flex' alignItems='center' justifyContent='space-between' className='thin_child'>
                                <Text>Monitor(2)</Text>
                                <MdDeleteForever size={20} className='del' />
                            </Box>
                            <Box display='flex' alignItems='center' justifyContent='space-between' className='thin_child'>
                                <Text>Monitor(2)</Text>
                                <MdDeleteForever size={20} className='del' />
                            </Box>

                        </Box>
                    </Box>
                    <FaRegHeart size={33} />
                    <Shop />
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
                                    <FaInstagram size={35} style={{ background: 'white', padding: '5px', color: 'black', borderRadius: '50%' }} />
                                    <FaFacebookF size={35} style={{ background: 'white', padding: '5px', color: 'black', borderRadius: '50%' }} />
                                    <FaTelegramPlane size={35} style={{ background: 'white', padding: '5px', color: 'black', borderRadius: '50%' }} />
                                    <FaYoutube size={35} style={{ background: 'white', padding: '5px', color: 'black', borderRadius: '50%' }} />
                                    <FaLinkedin style={{ background: 'white', color: 'black', width: '40px', padding: '5px', height: '40px', borderRadius: '50%' }} />
                                </Box>
                            </Accordion>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    )
}
