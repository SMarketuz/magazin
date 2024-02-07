import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

export default function Narx() {
    return (
        <Box padding='60px'>
            <Box display='flex' justifyContent='space-between' alignItems='start'>
                <Box>
                    <Text textDecoration='line-through' color='red'>20 000</Text>
                    <Text fontSize='28px' fontWeight='600'>19 000</Text>
                </Box>
                <FaRegHeart size={30} />
            </Box>
            <Box display='flex' alignItems={{md:'center', base:'start'}} gap={{md:'40px', base:'10px'}}  flexDirection={{md:'inherit', base:'column'}}>
                <Button color='#fff' bg='#06A56C' _hover='none'>Sotib Olish</Button>
                <Button color='#06A56C' border='3px solid #06A56C' bg='transparent'>Кreditga Olish</Button>
            </Box>
        </Box>
    )
}
