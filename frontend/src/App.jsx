import { Box } from "@chakra-ui/react"
import Register from "./components/Register"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero/Hero"
import Top from "./components/Top/Top"
function App() {

  return (
      <Box>
        <Navbar />
        <Hero/>
        <Top/>
      </Box>
  )
}

export default App
