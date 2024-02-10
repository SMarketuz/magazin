import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Producuts() {
  return (
    <Box>
      <Navbar/>
      <Breadcrumb>
        <BreadcrumbItem>
        <BreadcrumbLink href='/'>Bosh Saxifa</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Mahsulotlar</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Footer/>        
    </Box>
  )
}
