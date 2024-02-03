import { Box } from "@chakra-ui/react";
import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' minHeight='56vh'>
      <div class="spinner"></div>
    </Box>
  );
}
