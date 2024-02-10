import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { api } from '../api/api';

 const Home = () => {
  const [val , setVal] = useState([])

  return (
    <Box display={'flex'} flexDirection={'column'} gap={5} alignItems={'center'} justifyContent={'center'} minHeight={'80vh'}>
        <Box>

        </Box>
    </Box>
  )
}

export default Home