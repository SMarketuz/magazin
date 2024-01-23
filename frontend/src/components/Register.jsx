import React, { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useToast, Box, useDisclosure, Button, Input, Text, Alert } from '@chakra-ui/react'
import { FaEye, FaEyeSlash, } from "react-icons/fa";
import axios from 'axios';
import { api } from '../api';


export default function Register() {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const [value, setValue] = useState({ name: '', username: '', password: '' })
    const [value1, setValue1] = useState({ username: '', password: '' })
    const handleClick = () => setShow(!show)
    // headers: {
    //     "ngrok-skip-browser-warning": true,
    //     "Access-Control-Allow-Origin": "*",
    //   }
    // console.log(value.name, value.password, value.username);


    const [register, setRegister] = useState(false);
    // sign 
    const handleRegister = () => {
        axios.post(`${api}api/auth/user/create`, {
            'name': value.name,
            'username': value.username,
            'password': value.password
        }, {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
            }
        }).then((res) => {
            toast({
                description: `${res.data.message}`,
                status: 'success',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
            })
            setRegister(false)
        })
    }
    // login 
    const handleLogin = () => {
        axios.post(`${api}api/auth/login`, {
            'username': value1.username,
            'password': value1.password
        }, {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
            }
        }).then((res) => {
            localStorage.setItem('token', res.data.token);
            toast({
                description: `${res.data.message}`,
                status: 'success',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
            })
        })
    }

    return (


        <Box>
            {/* <BreadcrumbLink pl='10px' onClick={onOpen} display={{ xl: 'none', md: 'none', base: 'block' }}>Регистрация</BreadcrumbLink> */}
            {/* <Box display={{ xl: 'block', md: 'block', base: 'none' }} onClick={onOpen}>  <GoPerson size={30} /></Box> */}
            <Text onClick={onOpen} fontSize={'15px'}  cursor='pointer'>Ro'yhatdan O'tish</Text>


            {register ?
                // 1
                <Modal isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Ro'yhatdan O'tish</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form action="">
                                <Box display='flex' flexDirection='column' gap='30px'>
                                    <Input onChange={(e) => setValue({ ...value, name: e.target.value })} value={value.name} placeholder='Ism' />
                                    <Input onChange={(e) => setValue({ ...value, username: e.target.value })} value={value.username} placeholder='Username' />
                                    <Box display='flex' alignItems='center'>
                                        <Input onChange={(e) => setValue({ ...value, password: e.target.value })} value={value.password} pr='2.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
                                        <Button h='2.75rem' size='sm' onClick={handleClick}>{show ? <FaEyeSlash /> : <FaEye />}</Button>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='center' mt='40px' gap='10px'>
                                        <Text>Avval Ro'yhatdan O'tganmisz?  </Text>
                                        <Text onClick={() => setRegister(false)} color='blue' cursor='pointer'>Kirish</Text>
                                    </Box>
                                    <Button bg='#01579B' color='white' onClick={handleRegister}>Ro'yhatdan O'tish</Button>
                                </Box>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                :

                // 2
                <Modal isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Kirish</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form action="">
                                <Box display='flex' flexDirection='column' gap='30px'>
                                    <Input onChange={(e) => setValue1({ ...value1, username: e.target.value })} placeholder='Username' type='name' />
                                    <Box display='flex' alignItems='center'>
                                        <Input onChange={(e) => setValue1({ ...value1, password: e.target.value })} pr='2.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
                                        <Button h='2.75rem' size='sm' onClick={handleClick}>{show ? <FaEyeSlash /> : <FaEye />}</Button>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='center' mt='40px' gap='10px'>
                                        <Text>Accountingiz yo'qmi? </Text>
                                        <Text onClick={() => setRegister(true)} color='blue' cursor='pointer'>Ro'yhatdan o'tish</Text>
                                    </Box>
                                    <Button bg='#01579B' color='white' onClick={handleLogin}>Kirish</Button> </Box>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            }
        </Box>
    )
}
