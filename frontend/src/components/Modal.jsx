import { Box, Button, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function Modal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Button bg='#06A56C' onClick={onOpen} color='white' _hover='none'>To'liq Malumot</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        h
                    </ModalBody>
                </ModalContent>
            </Modal>

        </Box>
    )
}
