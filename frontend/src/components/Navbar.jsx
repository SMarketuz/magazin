import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Input, Link, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import Register from './Register';
import { FaBarsStaggered, FaPhoneVolume } from "react-icons/fa6";
import { line, logo } from '../assets';
import { PiScalesThin } from "react-icons/pi";
import { FaRegHeart, FaInstagram, FaFacebookF, FaTelegramPlane, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { GrAppsRounded } from 'react-icons/gr'
import { GoSearch } from 'react-icons/go';
import { FiShoppingCart } from 'react-icons/fi';
import { IoSearchOutline } from "react-icons/io5";
import Shop from './Shop';
import { MdDeleteForever } from 'react-icons/md';


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box>
            {/* for blue  */}
            <Box display={{ xl: 'flex', md: 'flex', base: 'none' }} alignItems='center' justifyContent='space-between' px='25px' py='10px' bg='#060F42' color='white'>
                <Box display='flex' alignItems='center' gap='30px'>
                    <HiOutlineBars3 size={30} />
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
            <Box display={{ md: 'flex', base: 'none' }} boxShadow=' 0px 4px 4px 0px rgba(0, 0, 0, 0.09)' alignItems='center' justifyContent='space-around' paddingBottom='20px' mt='20px'>
                <img src={logo} alt="" />
                <Button display="flex" alignItems='center' bg='#06A56C' color='white' padding='9px 12px' gap={4} fontSize={{ xl: '15px', md: '8px', }} className="catalogbtn" border='none'>КАТАЛОГ ТОВАРОВ<GrAppsRounded size={20} /></Button>
                <Box display='flex' alignItems='center' border='1px solid gray' >
                    <Input variant='unstyled' width={{ xl: '600px', md: '158px', base: '20px' }} pl='40px' placeholder="Поиск" />
                    <Button colorScheme='blue' borderRadius='0px' color='white'><GoSearch size={25} /></Button>
                </Box>
                <select>
                    <option value="">050 065 87 96</option>
                    <option value="">050 065 87 96</option>
                    <option value="">050 065 87 96</option>
                    <option value="">050 065 87 96</option>
                </select>
                <img src={line} alt="" />
                <Box className='thin_hover'>
                    <PiScalesThin size={35} className='thin_icon'/>
                    <Box className='thin'>
                        <Text>Ayriboshlash Ro'yxati</Text>
                        <Box display='flex' alignItems='center' justifyContent='space-between' className='thin_child'>
                            <Text>Monitor(2)</Text>
                            <MdDeleteForever size={20} className='del'/>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' className='thin_child'>
                            <Text>Monitor(2)</Text>
                            <MdDeleteForever size={20} className='del'/>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' className='thin_child'>
                            <Text>Monitor(2)</Text>
                            <MdDeleteForever size={20} className='del'/>
                        </Box>

                    </Box>
                </Box>
                <FaRegHeart size={30}/>
                {/* <FiShoppingCart size={30} style={{ cursor: 'pointer' }} /> */}
                <Shop />
            </Box>

            {/* for mobile nav  */}
            <Box>
                <Box bg='#060F42' display={{ md: 'none', base: 'flex' }} flexDirection='column' padding='20px' gap='20px'>
                    <Box display={{ md: 'none', base: 'flex' }} alignItems='center' color='white' justifyContent='space-around'>
                        <FaBarsStaggered ref={btnRef} onClick={onOpen} size={30} />
                        <img src={logo} alt="" />
                        <FaPhoneVolume size={30} />
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='space-around'>
                        <Button display="flex" alignItems='center' bg='#06A56C' color='white' padding='9px 12px' gap={4} className="catalogbtn">КАТАЛОГ ТОВАРОВ<GrAppsRounded size={20} /></Button>
                        <IoSearchOutline size={40} color='white' />
                        <Shop />
                    </Box>
                </Box>
                {/* for bars  */}
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
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
                                        <Text>To'lov va Dotavka</Text>
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
                                                Bizning Serice
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
                                    <FaLinkedinIn size={35} style={{ background: 'white', padding: '5px', color: 'black', borderRadius: '50%' }} />
                                </Box>
                            </Accordion>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    )
}
