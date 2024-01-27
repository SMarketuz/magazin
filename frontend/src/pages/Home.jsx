import React from "react";
import Navbar from "../components/Navbar";
import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import Top from "../components/Top/Top";
import Game from "../components/Game/Game";
import Main from "../components/Main/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="1860px">
        <Hero />
        <Top />
      </Container>
      <Game />
      <Container maxWidth="1860px">
        <Main />
      </Container>
      <Footer/>
    </Box>
  );
}
