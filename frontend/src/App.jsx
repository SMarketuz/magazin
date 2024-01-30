import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound/NotFound"

function App() {

  return (
      <Box>
        <Routes>
          <Route path='/' element={<Home/>}></Route>

          {/* Not Found  */}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Box>
  )
}

export default App
