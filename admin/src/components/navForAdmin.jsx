import { Box, Text } from '@chakra-ui/react'

const NavForAdmin = () => {
  return (
    <Box w={'100%'} h={'8vh'} bg={'#4C4C4C'} px={'20px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontWeight={'600'} fontSize={'25px'} color={'white'}>LOGO</Text>
        <Box display={'flex'} alignItems={'center'}>
            <Text fontWeight color={'white'}>Login/</Text>
            <Text fontWeight color={'white'}>Register</Text>
        </Box>
    </Box>
  )
}

export default NavForAdmin
