import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { FaMoneyBillWave } from 'react-icons/fa'
import { FcApproval, FcDebt, FcInfo, FcMoneyTransfer, FcOrganization, FcPaid, FcShipped, FcStatistics, FcSynchronize } from 'react-icons/fc'
import Foricons from './Foricons'

export default function Tolov() {
    return (
        <Box width={{ xl: '750px', md: '500px', base: '90%' }} >
            {/* Dostavka  */}
            <Box boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' padding='8px'>
                <Text fontWeight='600' fontSize='22px'>Dostavka</Text>
                <Foricons icon={<FcShipped size={30} />} cartoon={"Do'kondan Uygacha"} text={'Bir kun ichida Yetkaish'} word={'Tekin'} />
                <Foricons icon={<FcInfo size={30} />} cartoon={"Moshina Yaxshi Bo'ladi"} text={'Bir kun ichida Yetkazish'} word={'5000 sumdan boshlanadi'} />
                <Foricons icon={<FcDebt size={30} />} cartoon={'Turgan Joyingizgacha'} text={'Bir kun ichida Yetkazish'} word={'5000 sumdan boshlanadi'} />
                <Foricons icon={<FcOrganization size={30} />} cartoon={'Yoki Pochat Orqali'} text={'Bir kun ichida Yetkazish'} word={'5000 sumdan boshlanadi'} />
                <Foricons icon={<FcMoneyTransfer size={30} />} cartoon={'Uyingizgacha Boradi'} text={'Bir kun ichida Yetkazish'} word={'3000 sumdan boshlanadi'} />
            </Box>
            {/* Tolov  */}
            <Box boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' padding='8px' mt='40px'>
                <Text fontWeight='600' fontSize='22px'>To'lov</Text>
                <Foricons icon={<FaMoneyBillWave size={30} />} cartoon={"Tovarni Qo'lingziga Olganda To'lov Qilasz"} />
                <Foricons icon={<FcStatistics size={30} />} cartoon={"Foiz 4oyga 0% foiz"} />
                <Foricons icon={<FcPaid size={30} />} cartoon={'Kredit Olish Osson va Qulay'} />
            </Box>
            {/* garantiya  */}
            <Box boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' padding='8px' mt='40px'>
                <Text fontWeight='600' fontSize='22px'>Garantiya</Text>
                <Foricons icon={<FcApproval size={30} />} cartoon={"36oy garantiya"} />
                <Foricons icon={<FcSynchronize size={30} />} cartoon={"14 kungacha tovarni almashtirib berish"} />
            </Box>
        </Box>
    )
}
