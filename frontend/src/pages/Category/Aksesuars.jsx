import React from 'react'
import Navbar from '../../components/Navbar'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Footer from '../../components/Footer'

export default function Aksesuars() {
  return (
    <Box>
        <Navbar/>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Bosh Saxifa</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Akssesuarlar</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

        <Footer/>
    </Box>
  )
}
