import React, { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Box, useDisclosure, Button, Input, Text, Alert } from '@chakra-ui/react'
import { FaEye, FaEyeSlash,  } from "react-icons/fa";
import { GoPerson } from 'react-icons/go';
import axios from 'axios';
import { api } from '../api';


export default function Register() {
    const [toast, setToast] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const [value, setValue] = useState({name:'', username:'', password:''})
    const [value1, setValue1] = useState({ name:'', password:''})
    const handleClick = () => setShow(!show)
    const [register, setRegister] = useState(false);
            const Register = () =>{
                axios.post(`${api}/api/auth/user/create`,{
                    'name': value.name,
                    'username': value.username,
                    'password': value.password,
                })
                .then((res) =>{
                    setValue({name: '', email: '', password: ''}),
                    alert('royhatdan otdiz')
                    console.log(res.data);
                })
            }
   
    return (


        <Box>

            {/* <BreadcrumbLink pl='10px' onClick={onOpen} display={{ xl: 'none', md: 'none', base: 'block' }}>Регистрация</BreadcrumbLink> */}
            <Box display={{ xl: 'block', md: 'block', base: 'none' }} onClick={onOpen}>  <GoPerson size={30} /></Box>


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
                                    <Input onChange={(e) => setValue(e.target.value)} value={value.name} placeholder='Ism' />
                                    <Input onChange={(e) => setValue(e.target.value)} value={value.username} placeholder='Username' />
                                    <Box display='flex' alignItems='center'>
                                        <Input onChange={(e) => setValue(e.target.value)} value={value.password} pr='2.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
                                        <Button h='2.75rem' size='sm' onClick={handleClick}>{show ? <FaEyeSlash /> : <FaEye />}</Button>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='center' mt='40px' gap='10px'>
                                        <Text>Avval Ro'yhatdan O'tganmisz?  </Text>
                                        <Text onClick={() => setRegister(false)} color='blue' cursor='pointer'>Kirish</Text>
                                    </Box>
                                    <Button bg='#01579B' color='white' onClick={Register}>Ro'yhatdan O'tish</Button>
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
                                    <Input  onChange={(e) => setValue1(e.target.value)} placeholder='Username' type='name' />
                                    <Box display='flex' alignItems='center'>
                                        <Input  onChange={(e) => setValue1(e.target.value)} pr='2.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
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
                {toast && (<Alert sx={{ position: 'fixed', top: '0', right: '0', borderRadius: '8px', w: '400px', bg: '#2FF924', color: 'white' }}>
                This is a success alert — check it out!
            </Alert>)}
        </Box>


    )
}
