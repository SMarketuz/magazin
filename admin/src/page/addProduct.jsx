import { Box, Text,Input,Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const AddProduct = () => {
  return (
    <Box pl={'300px'} h={'92vh'} w={'100%'}>
      <Box w={'95%'} m={'auto'} pt={'30px'}>
          <Text fontSize={'30px'} fontWeight={'700'}>Add product</Text>
          <Box pt={'40px'} display={'flex'} alignItems={'center'} gap={'5rem'}>
              <Box display={'flex'} flexDirection={'column'} gap={'1.5rem'}>
                <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>Image</Text>
                <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>Name</Text>
                <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>Information</Text>
                <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'} w={'140px'}>Original cost</Text>
                <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>Current cost</Text>
                <Text fontSize={'22px'} color={'#ADADAE'} fontWeight={'500'}>Rate</Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} gap={'1rem'} w={'100%'}>
                <Input placeholder='image Url'  w={'100%'} />
                <Input placeholder='product Name' w={'100%'} />
                <Input placeholder='Information' w={'100%'} />
                <Input placeholder='Original cost' w={'100%'} />
                <Input placeholder='Current cost' w={'100%'} />
                <Input placeholder='Rate' w={'100%'} />
              </Box>

          </Box>
          <Box display={'flex'} alignItems={'right'} justifyContent={'right'}>
              <Button mt={'30px'} w={'100px'} h={'40px'} color={'white'} _hover={''} bg={'#4C4C4C'}>Send</Button>
          </Box>
      </Box>
    </Box>
  )
}

export default AddProduct
