import { Box, Input,Text,Button } from '@chakra-ui/react'
import './index.css'
import NavForAdmin from './components/navForAdmin'
import SidebarForAdmin from './components/sidebarForAdmin'
import AddTopProduct from './page/addTopProduct'
import { Route, Routes } from 'react-router-dom'
import GetTopProduct from './page/GetTopProduct'
import GetProduct from './page/GetProduct'
import AddProduct from './page/addProduct'
import Users from './page/users'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);
  const toast = useToast()


  const Login = () => {
    if(username == 'abc123' && password == '12345679'){
      setLogin(false)
      toast({
        description: "Kirdingiz",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }else{
      toast({
        description: "Parol yoki username hato",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <>
    {login ?<Box w={'100%'} minH={'100vh'} bg={'lightblue'} display={'flex'}>
        <Box  w={{md:'400px', base: '90%'}} rounded={'10px'} bg={'white'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} h={'300px'} m={'auto'}>
          <Text fontSize={'25px'} fontWeight={'600'} pb={'30px'}>Admin</Text>
          <Box display={'flex'} flexDirection={'column'} w={'100%'} gap={'2rem'}>
            <Input onChange={(e) => setUsername(e.target.value )} value={username} w={'90%'} m={'auto'} placeholder='username'/>
            <Input onChange={(e) => setPassword(e.target.value )} value={password} w={'90%'} m={'auto'} placeholder='password'/>
          <Button onClick={Login} w={'90%'} m={'auto'} bg={'gray.300'}>Login</Button>
          </Box>
        </Box>
    </Box> 
    :
      <Box>
        <NavForAdmin />
        <SidebarForAdmin />
        <Routes>
          <Route path='/admin/topProduct-add' element={<AddTopProduct />} />
          <Route path='/admin/topProduct-get' element={<GetTopProduct />} />
          {/* <Route path='/admin/product-add' element={<AddProduct />} />
          <Route path='/admin/product-get' element={<GetProduct />} /> */}
          <Route path='/admin/users' element={<Users />} />
        </Routes>
      </Box>
    }


    </>
  )
}

export default App
