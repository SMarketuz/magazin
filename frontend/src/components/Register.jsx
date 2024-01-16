import React, { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Box, useDisclosure, Button, Input, Text } from '@chakra-ui/react'
import { FaEye, FaEyeSlash,  } from "react-icons/fa";
import { GoPerson } from 'react-icons/go';

export default function Register() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [register, setRegister] = useState(false);
    return (
        <Box>

            {/* <BreadcrumbLink pl='10px' onClick={onOpen} display={{ xl: 'none', md: 'none', base: 'block' }}>Регистрация</BreadcrumbLink> */}
            <Box display={{ xl: 'block', md: 'block', base: 'none' }} onClick={onOpen}>  <GoPerson size={30} /></Box>


            {register ?
                // 1
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Ro'yhatdan O'tish</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form action="">
                                <Box display='flex' flexDirection='column' gap='30px'>
                                    <Input placeholder='Ism' />
                                    <Input placeholder='Username' />
                                    <Box display='flex' alignItems='center'>
                                        <Input pr='2.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
                                        <Button h='2.75rem' size='sm' onClick={handleClick}>{show ? <FaEyeSlash /> : <FaEye />}</Button>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='center' mt='40px' gap='10px'>
                                        <Text>Avval Ro'yhatdan O'tganmisz?  </Text>
                                        <Text onClick={() => setRegister(false)} color='blue' cursor='pointer'>Kirish</Text>
                                    </Box>
                                    <Button bg='#01579B' color='white'>Ro'yhatdan O'tish</Button>
                                </Box>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                :

                // 2
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Kirish</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form action="">
                                <Box display='flex' flexDirection='column' gap='30px'>
                                    <Input placeholder='Username' type='name' />
                                    <Box display='flex' alignItems='center'>
                                        <Input pr='2.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
                                        <Button h='2.75rem' size='sm' onClick={handleClick}>{show ? <FaEyeSlash /> : <FaEye />}</Button>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='center' mt='40px' gap='10px'>
                                        <Text>Accountingiz yo'qmi? </Text>
                                        <Text onClick={() => setRegister(true)} color='blue' cursor='pointer'>Ro'yhatdan o'tish</Text>
                                    </Box>
                                    <Button bg='#01579B' color='white'>Kirish</Button> </Box>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            }
        </Box>

    )
}
