import React from 'react'
import Navbar from '../../components/Navbar'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Footer from '../../components/Footer'

export default function Laptop() {
  return (
    <Box>
        <Navbar/>
        <Breadcrumb>
        <BreadcrumbItem>
        <BreadcrumbLink href='/'>Bosh Saxifa</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Noutbooklar</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

        <Footer/>
    </Box>
  )
}
