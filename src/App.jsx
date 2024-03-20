import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Dashbord from './Pages/Dashbord'
import QuizPage from './Pages/QuizPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/leaderboard' element={<Dashbord />}/>
          <Route path='/quiz' element={<QuizPage />}/>
        </Routes>
      </Box>
    </ChakraProvider>
  )
}

export default App
