import { Box, Container } from "@chakra-ui/react"
import Register from "./components/Register"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero/Hero"
import Top from "./components/Top/Top"
import Game from "./components/Game/Game"
function App() {

  return (
      <Box>
        <Navbar />
        <Container maxWidth='1860px'> 
        <Hero/>
        <Top/>
        </Container>
        <Game/>
      </Box>
  )
}

export default App
