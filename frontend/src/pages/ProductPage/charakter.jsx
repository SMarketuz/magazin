import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import './ProductPage.css'

export default function Charakter() {
    const [collapse, setCollapse] = useState(false)
    return (
        <Box width={{ xl: '600px', base: '110%' }} mt='40px'>
            <Text fontSize={{ md: '32px', base: '20px' }} fontWeight='600'>Mahsulot Imkoniyatlari</Text>
            <Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between' bg='#F4F8FB'><Text>Ekran Dyumi</Text><Text>15"</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between'>Ekran Razmeri<Text></Text><Text>1920x1080</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between' bg='#F4F8FB'><Text>Protsessor</Text><Text>Ryzen9 7950x</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between'><Text>Mahsulot Rangi</Text><Text>Ko'k</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between' bg='#F4F8FB'><Text>Ekran Yangilanish tezligi</Text><Text>60Gts</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between'><Text>Xotira</Text><Text>512GB SDD</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between' bg='#F4F8FB'><Text>Tezkor Xotira</Text><Text>32 Gb</Text></Box>
            </Box>

            <Box className={`long-cards ${collapse ? "expanded" : ""}`} w='100%'>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between'><Text>Ekran Dyumi</Text><Text>15"</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between' bg='#F4F8FB'>Ekran Razmeri<Text></Text><Text>1920x1080</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between'><Text>Protsessor</Text><Text>Ryzen9 7950x</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between' bg='#F4F8FB'><Text>Mahsulot Rangi</Text><Text>Ko'k</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between'><Text>Ekran Yangilanish tezligi</Text><Text>60Gts</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between' bg='#F4F8FB'><Text>Xotira</Text><Text>512GB SDD</Text></Box>
                <Box padding='12px' display='flex' alignItems='center' justifyContent='space-between'><Text>Tezkor Xotira</Text><Text>32 Gb</Text></Box>
            </Box>
            <Text px='10px' mt='20px' display='flex' alignItems='center' gap='2px' color='#3182CE' onClick={() => setCollapse((prev) => !prev)}>Hammasini Ko'rish<IoIosArrowDown size={20} /></Text>
        </Box>
    )
}
