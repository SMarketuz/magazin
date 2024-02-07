import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export default function Loading({ size, height }) {
    return (
        <Box display='flex' alignItems='center' justifyContent='space-between'>
            <Box padding='6' boxShadow='lg' bg='white' width={size} height={height}>
                <Skeleton height={'180px'} />
                <Skeleton height={'10px'} mt='20px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
            </Box>
            <Box padding='6' boxShadow='lg' bg='white' width={size} height={height}>
                <Skeleton height={'180px'} />
                <Skeleton height={'10px'} mt='20px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
            </Box>
            <Box padding='6' boxShadow='lg' bg='white' width={size} height={height}>
                <Skeleton height={'180px'} />
                <Skeleton height={'10px'} mt='20px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
            </Box>
            <Box padding='6' boxShadow='lg' bg='white' width={size} height={height}>
                <Skeleton height={'180px'} />
                <Skeleton height={'10px'} mt='20px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
                <Skeleton height={'10px'}  mt='10px'/>
            </Box>
        </Box>
    )
}
