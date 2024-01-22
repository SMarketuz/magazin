import { Box, Text, Input, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const Users = () => {
  return (
    <Box w={"95%"} m={"auto"} pl={"300px"} pt={"50px"}>
      <TableContainer border={"1px solid #ADADAE"} rounded={"12px"}>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Username</Th>
              <Th>Password</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>qwerty</Td>
              <Td>salom</Td>
              <Td>1234abc</Td>
              <Td>
                {" "}
                <Button _hover="" bg={"red"} variant="solid">
                  <DeleteIcon />
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
