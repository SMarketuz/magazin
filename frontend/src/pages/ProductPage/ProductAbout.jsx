import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import './ProductPage.css'

export default function ProductAbout() {
  const [collapse, setCollapse] = useState(false);
  return (
    <Box width={{ xl: "600px", md: "400px", base: "100%" }}>
        <Text fontWeight="600" fontSize="28px">Mahsulot Haqida</Text>
        <Text mt="40px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nostrum
        aliquam ut ipsum quis deleniti facilis tempore nam reprehenderit
        explicabo!, corrupti quia accusamus odit odio dicta, magni tenetur optio
        voluptatem error voluptate quod, minus atque eius officiis! Amet ut
        consectetur deleniti quo sint minus quae, excepturi reiciendis atque
        ipsam veniam saepe porro beatae officia tenetur quia itaque. Culpa,
        nobis. Porro, provident!
        <span className={`long-text ${collapse ? "expanded":"" }`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nostrum
        aliquam ut ipsum quis deleniti facilis tempore nam reprehenderit
        explicabo!, corrupti quia accusamus odit odio dicta, magni tenetur optio
        voluptatem error voluptate quod, minus atque eius officiis! Amet ut
        consectetur deleniti quo sint minus quae, excepturi reiciendis atque
        ipsam veniam saepe porro beatae officia tenetur quia itaque. Culpa,
        nobis. Porro, provident!
        </span>
        </Text>
        <Text mt="10px" color="#3182CE" display="flex" alignItems="center" onClick={() => setCollapse((prev) => !prev)}>Yana Ko'rish<IoIosArrowDown />{" "}
        </Text>
    </Box>
  );
}
