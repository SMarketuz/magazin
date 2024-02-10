import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Videokarta() {
  return (
    <Box>
        <Navbar/>
        <Breadcrumb>
        <BreadcrumbItem>
        <BreadcrumbLink href='/'>Bosh Saxifa</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Video Kartalar</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

        <Footer/>
    </Box>
  )
}
