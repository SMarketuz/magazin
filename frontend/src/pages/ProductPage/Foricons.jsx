import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Foricons({icon, text, word, cartoon}) {
    return (
        <Box display='flex' alignItems='center'  justifyContent='space-between' w='100%' padding='15px' >
            <Text>{icon}</Text>
            <Text fontSize={{md:'16px', base:'13px'}}>{cartoon}</Text>
            <Text fontSize={{md:'16px', base:'13px'}}>{text}</Text>
            <Text fontSize={{md:'16px', base:'13px'}} color='#3182CE'>{word}</Text>
        </Box>
    )
}
