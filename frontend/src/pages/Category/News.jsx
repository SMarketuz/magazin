import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

export default function News() {
  return (
    <Box>
        <Navbar/>
        <Breadcrumb>
        <BreadcrumbItem>
        <BreadcrumbLink href='/'>Bosh Saxifa</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Yangiliklar</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

        <Footer/>
    </Box>
  )
}
