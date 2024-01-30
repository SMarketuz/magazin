import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export default function Skeleton({size}) {
    return (
        <Box display='flex' alignItems='center' justifyContent='space-between'>
            <Box padding='6' boxShadow='lg' bg='white' width={size} height='350px'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' /> 
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' /> 
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' /> 
            </Box>
            <Box padding='6' boxShadow='lg' bg='white' width={size} height='350px'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white' width={size} height='350px'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white' width={size} height='350px'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
            <Box padding='6' boxShadow='lg' bg='white' width={size} height='350px'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
        </Box>
    )
}
