import { Box, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const SidebarForAdmin = () => {
  return (
    <Box
      w={"300px"}
      h={"92vh"}
      bg={"#4C4C4C"}
      position={"absolute"}
      top={"8vh"}
      left={"0"}
    >
      <Box>
        <Accordion  allowToggle>
          <AccordionItem style={{ border: 'none' , paddingTop: '10px'}}>
            <h2>
              <AccordionButton>
                <Box pr={'5px'} fontWeight={'500'} fontSize={'20px'} color={'white'} textAlign="left">
                  Top Category
                </Box>
                <AccordionIcon style={{color: 'white'}} />
              </AccordionButton>
            </h2>
            <AccordionPanel style={{ border: 'none' }} pb={4} fontWeight={'500'} fontSize={'18px'} color={'white'}>
              <Link to={'/admin/topProduct-add'}><Text>Post category</Text></Link>
              <Link to={'/admin/topProduct-get'}><Text>Get Category</Text></Link>
            </AccordionPanel>
          </AccordionItem>

          {/* 3*/}
          {/* <AccordionItem style={{ border: 'none' , paddingTop: '10px'}}>
            <h2>
              <AccordionButton>
                <Box pr={'5px'} fontWeight={'500'} fontSize={'20px'} color={'white'} textAlign="left">
                  Products
                </Box>
                <AccordionIcon style={{color: 'white'}} />
              </AccordionButton>
            </h2>
            <AccordionPanel style={{ border: 'none' }} pb={4} fontWeight={'500'} fontSize={'18px'} color={'white'}>
              <Link to={'/admin/product-add'}><Text>Add product</Text></Link>
              <Link to={'/admin/product-get'}><Text>Get product</Text></Link>
            </AccordionPanel>
          </AccordionItem> */}

        </Accordion>

        <Box pl={'15px'} pt={'15px'} fontWeight={'500'} fontSize={'20px'} color={'white'} textAlign="left">
            <Link to={'/admin/users'}>Users</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarForAdmin;
