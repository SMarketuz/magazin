import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound/NotFound"
import KeyBoards from "./pages/Category/KeyBoards"
import Aksesuars from "./pages/Category/Aksesuars"
import Laptop from "./pages/Category/Laptop"
import Monitor from "./pages/Category/Monitor"
import Mouses from "./pages/Category/Mouses"
import Videokarta from "./pages/Category/Videokarta"

function App() {

  return (
      <Box>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/keyboard' element={<KeyBoards/>}></Route>
          <Route path='/aksesuar' element={<Aksesuars/>}></Route>
          <Route path='/laptop' element={<Laptop/>}></Route>
          <Route path='/monitor' element={<Monitor/>}></Route>
          <Route path='/mouses' element={<Mouses/>}></Route>
          <Route path='/videokarta' element={<Videokarta/>}></Route>

          {/* Not Found  */}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Box>
  )
}

export default App
