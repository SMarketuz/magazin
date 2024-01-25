import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
  Td,
  Button,
} from '@chakra-ui/react'

const ModalProp = ({maxInform}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
     
      <Td onClick={onOpen} color={'blue'} cursor={'pointer'} textDecoration={'underline'}>To'liq Ma'lumot</Td>

      <Modal isOpen={isOpen}  onClose={onClose}>
        <ModalOverlay />
        <ModalContent  bg={'#4C4C4C'} color={'white'}>
          <ModalHeader>To'liq ma'lumot</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {maxInform}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Bekitish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ModalProp