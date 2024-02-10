import { Box, Button, Text, useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const ModalForGamers = ({text}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
         <Text onClick={onOpen} fontSize={'15px'} cursor='pointer' color='#01579B'>To'liq Ma'lumot</Text>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Ma'lumot</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                {text}
                </ModalBody>
            </ModalContent>
            </Modal>
    </Box>
  )
}

export default ModalForGamers