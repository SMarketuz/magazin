import { SearchIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Search = ({setSearch}) => {
  return (
    <Box mb={5}>
        <Box border={'2px'} rounded={'10px'}  display={'flex'} alignItems={'center'} gap={5} borderColor={'gray.400'}>
            {/* for icon glass */}
            <Box fontSize={'25px'} borderRight={'2px'} color={'gray'} borderColor={'gray.400'}>
                <Box p={2} pr={5} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <SearchIcon />
                </Box>
            </Box>

            {/* for input search */}
            <Box width={'100%'}>
                <input autoFocus  onChange={(e) => setSearch(e.target.value)}  style={{outline: 'none' , border: 'none' , width: '100%'}} type="text" placeholder='qidirish...' />
            </Box>
        </Box>
    </Box>
  )
}

export default Search