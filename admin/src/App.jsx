import { Box, Input,Text,Button } from '@chakra-ui/react'
import './index.css'
import NavForAdmin from './components/navForAdmin'
import SidebarForAdmin from './components/sidebarForAdmin'
import AddTopProduct from './page/addTopProduct'
import { Route, Routes, useNavigate } from 'react-router-dom'
import GetTopProduct from './page/GetTopProduct'
import Users from './page/users'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import UpdateCategory from './page/updateCategory'
import CategoryForGamers from './page/CategoryForGamers'
import CategoryForGamersGet from './page/CategoryForGamersGet'
import UpdateGamers from './page/updateGamers'
import Home from './page/home'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const toast = useToast()
  const navigate = useNavigate()


  const Login = () => {
    if(username == 'aaa' && password == 'aaa'){
      setLogin(false)
      toast({
        description: "Kirdingiz",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      navigate('/admin/topProduct-add')
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
          <form style={{width: '100%'}} onSubmit={(e) => {
            e.preventDefault();
            Login()
          }}>
            <Box display={'flex'} flexDirection={'column'} w={'100%'} gap={'2rem'}>
              <Input onChange={(e) => setUsername(e.target.value )} value={username} w={'90%'} m={'auto'} placeholder='username'/>
              <Input onChange={(e) => setPassword(e.target.value )} value={password} w={'90%'} m={'auto'} placeholder='password'/>
              <Button type='submit' onClick={Login} w={'90%'} m={'auto'} bg={'gray.300'}>Login</Button>
            </Box>
          </form>
        </Box>
    </Box> 
    :
      <Box>
        <NavForAdmin />
        <SidebarForAdmin />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin/topProduct-add' element={<AddTopProduct />} />
          <Route path='/admin/topProduct-get' element={<GetTopProduct />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/updateCategory/:id' element={<UpdateCategory />} />
          <Route path='/admin/categoryForGamers-add' element={<CategoryForGamers />} />
          <Route path='/admin/categoryForGamers-get' element={<CategoryForGamersGet />} />
          <Route path='/admin/updateGamers/:name/:id' element={<UpdateGamers />} />
        </Routes>
      </Box>
    }


    </>
  )
}

export default App
