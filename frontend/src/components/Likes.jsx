import { Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Button, } from '@chakra-ui/react'
import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FiShoppingCart } from 'react-icons/fi';
import { tv } from '../assets';
import { FaRegHeart } from 'react-icons/fa';


export default function Likes() {
    const [val, setVal] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [natija, setNatija] = useState(0)

    const plus = () => {
        setVal(val + 360000)
        setNatija(natija + 1)
    }
    const mnus = () => {
        if (0 < val) {
            setVal(val - 360000)
            setNatija(natija - 1)
        } else {
            setVal(val - 0)
        }
    }

    return (
        <Box>
            <Box display={{ xl: 'block', md: 'block', base: 'none' }}><FaRegHeart size={35} onClick={onOpen} style={{ cursor: 'pointer' }} /></Box>

            <Modal isOpen={isOpen} onClose={onClose} size='100%'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Yoqtirganlar: 2</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            {/* 1 */}
                            <Box display='flex' alignItems='center' justifyContent='space-around' textAlign='center' flexDirection={{ xl: 'inherit', md: 'inherit', base: 'column' }} mb={12}>
                                <img width='80px' src={tv} alt="" />
                                <Text>Процессор Intel Core i5-10400F, Box (BX8070110400F)(BX8070110400F)</Text>
                                <Text>To'liq Ma'lumot</Text>
                                <Text>360 000sum</Text>
                                <Button color='red'><MdDeleteForever size={20} /></Button>
                            </Box>
                            {/* 2 */}
                            <Box display='flex' alignItems='center' justifyContent='space-around' textAlign='center' flexDirection={{ xl: 'inherit', md: 'inherit', base: 'column' }}>
                                <img width='80px' src={tv} alt="" />
                                <Text>Процессор Intel Core i5-10400F, Box (BX8070110400F)(BX8070110400F)</Text>
                                <Text>To'liq Ma'lumot</Text>
                                <Text>360 000sum</Text>
                                <Button color='red'><MdDeleteForever size={20} /></Button>
                            </Box>
                            {/* obshi  */}
                            <Box display='flex' alignItems='center' justifyContent='end' gap='15px' mt='70px' mb='110px'>
                                <Button bg='#06A56C' color='white'>Zakaz Berish</Button>
                            </Box>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}
