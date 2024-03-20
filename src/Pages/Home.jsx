import { Box, Button, Center, Flex, Input, Select, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Form, Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

      const handleSubmit= ()=>{
        const user = {
            category,
            level,
            name,
            number
        }
        sessionStorage.setItem("user-data" , JSON.stringify(user));
        console.log(user)
        navigate("/quiz")
      }

  
  const [category , setCategory] = useState("")
  const [level , setLevel] = useState("")
  const [name , setName] = useState("")
  const [number , setNumber] = useState(3)
  
  return (
    <Center h={'80vh'}>
    <Box justifyContent={'center'} alignItems={'center'} boxShadow ='rgba(0, 0, 0, 0.35) 0px 2px 10px' borderRadius={10} >
      <Flex  flexDirection={'column'} alignItems={'center'} gap={5} p={10}>
      <Input  w={'50vh'} placeholder='Enter Your Name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      
      <Stack spacing={3}>
        <Select w={'50vh'} variant='outline' placeholder='Select Category' onChange={(e)=>setCategory(e.target.value)}>
         <option value='General Knowledge'>General Knowledge</option>
         <option value='Sports'>Sports</option>
         <option value='Geography'>Geography</option>
        </Select>
        <Select w={'50vh'} variant='outline' placeholder='Select Difficulty' onChange={(e)=>setLevel(e.target.value)}>
        <option value='Easy'>Easy</option>
        <option value='Mideum'>Mideum</option>
        <option value='Hard'>Hard</option>
        </Select>
        <Select w={'50vh'} variant='outline' placeholder='Choose Number Of Questions' onChange={(e)=>setNumber(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        </Select>
      </Stack>


      <Flex alignItems={'self-start'} justifyContent={'left'} mr={20} mb={-3}>
      </Flex>
      <Button w={'40vh'} colorScheme='red' onClick={handleSubmit} >START QUIZ</Button>
      </Flex>
    </Box>
    </Center>
  )
  
}

export default Home
