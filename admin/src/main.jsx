import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
)