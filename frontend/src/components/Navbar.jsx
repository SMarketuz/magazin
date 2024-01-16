import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import Register from './Register';

export default function Navbar() {
    return (
        <Box>
            {/* for blue  */}
            <Box display='flex' alignItems='center' justifyContent='space-around' py='10px' bg='#060F42' color='white'>
                <Box display='flex' alignItems='center' gap='30px'>
                    <HiOutlineBars3  size={30}/>
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
        </Box>
    )
}
