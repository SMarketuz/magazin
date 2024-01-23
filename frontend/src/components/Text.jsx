import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {  } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'

export default function Word({icon, text}) {
  return (
    <Box>
     <Box className='active' width='350px' display='flex' alignItems='center' justifyContent='space-between' padding='12px'><Box display='flex' alignItems='center' gap={2}>{icon}<Text fontSize='17px' fontWeight={600}>{text}</Text></Box><IoIosArrowForward /></Box>
    </Box>
  )
}
