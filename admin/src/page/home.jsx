import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={5} alignItems={'center'} justifyContent={'center'} minHeight={'80vh'}>
        <Heading fontSize={'50PX'} letterSpacing={'40px'}>CRUD</Heading>

        <Box>
            <Heading fontSize={'30PX'} letterSpacing={'20px'}>C:CREATE</Heading>
            <Heading fontSize={'30PX'} letterSpacing={'20px'}>R:READ</Heading>
            <Heading fontSize={'30PX'} letterSpacing={'20px'}>U:UPDATE</Heading>
            <Heading fontSize={'30PX'} letterSpacing={'20px'}>D:DELETE</Heading>
        </Box>
    </Box>
  )
}

export default Home