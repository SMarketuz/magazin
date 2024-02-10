import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { avatar } from '../../assets'
import { FaStar } from 'react-icons/fa'
import { RiMessage2Line } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io'
import { BiLike } from 'react-icons/bi'

export default function ProductComent() {
    return (
        <Box display='flex' justifyContent='center' flexDirection='column' gap='35px'>
            <Text fontWeight='600' fontSize='28px'>Izohlar</Text>
            {/* 1 */}
            <Box width={{ xl: '550px', md: '450px', base: '100%' }} lineHeight='30px' padding='20px' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'>
                <Box display='flex' alignItems='center' justifyContent='space-between' flexDirection={{ md: 'inherit', base: 'column' }}>
                    <Box display='flex' alignItems='center' gap='7px'>
                        <img src={avatar} alt="" />
                        <Text fontWeight='600' fontSize='18px' >username</Text>
                        <Text display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Text>
                    </Box>
                    <Text textAlign='end'>07.04.2024</Text>
                </Box>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vero veniam illum nam molestiae voluptatibus optio veritatis earum ullam dolores.</Text>
                <Box display='flex' alignItems={{ md: 'center', base: 'start' }} justifyContent='end' gap='40px' color='#3182CE' flexDirection={{ md: 'inherit', base: 'column' }}>
                    <Box display='flex' alignItems='center' gap='4px'>
                        <RiMessage2Line size={25} />
                        <Text> Javob Berish</Text>
                    </Box>
                    <Box display='flex' alignItems='center' gap='4px'>
                        <Text>2 Javoblar</Text>
                        <IoIosArrowDown />
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <BiLike size={25} />
                        <Text>0</Text>
                    </Box>
                </Box>
            </Box>
            {/* 2 */}
            <Box width={{ xl: '550px', md: '450px', base: '100%' }} lineHeight='30px' padding='20px' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'>
                <Box display='flex' alignItems='center' justifyContent='space-between' flexDirection={{ md: 'inherit', base: 'column' }}>
                    <Box display='flex' alignItems='center' gap='7px'>
                        <img src={avatar} alt="" />
                        <Text fontWeight='600' fontSize='18px' >username</Text>
                        <Text display='flex' alignItems='center' color='orange'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></Text>
                    </Box>
                    <Text textAlign='end'>07.04.2024</Text>
                </Box>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vero veniam illum nam molestiae voluptatibus optio veritatis earum ullam dolores.</Text>
                <Box display='flex' alignItems={{ md: 'center', base: 'start' }} justifyContent='end' gap='40px' color='#3182CE' flexDirection={{ md: 'inherit', base: 'column' }}>
                    <Box display='flex' alignItems='center' gap='4px'>
                        <RiMessage2Line size={25} />
                        <Text> Javob Berish</Text>
                    </Box>
                    <Box display='flex' alignItems='center' gap='4px'>
                        <Text>2 Javoblar</Text>
                        <IoIosArrowDown />
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <BiLike size={25} />
                        <Text>0</Text>
                    </Box>
                </Box>
            </Box>
            <Button color='#3182CE'>Yana Ko'rish</Button>
        </Box>
    )
}
