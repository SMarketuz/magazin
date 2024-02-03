import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function KeyBoards() {
    const [data, setData] = useState([])
    
  return (
    <Box>
        <Navbar/>

        <Footer/>
    </Box>
  )
}
