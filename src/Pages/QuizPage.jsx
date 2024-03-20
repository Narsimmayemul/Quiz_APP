import { Box, Button, Stack, Text, background } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const QuizPage = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);
  
  
  const setQuiz = async() => {
      try {
          const que = JSON.parse(sessionStorage.getItem("user-data"));
          const cat = que.category;
          const data = await axios.get(`http://localhost:8000/data?category=${cat}&_limit=${que.number}`)
          setData(data.data)
          setNumber(que.number);
        } catch (error) {
            console.error(error);
        }
    };
    console.log(data)
    
    useEffect(() => {     
        setQuiz();
    }, []);
    
    return (
        <Box mt={50} w={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} h={'100vh'} gap={10}>
      {data.map((e , index)=>(
          <Quiz e={e} key={index}/>
      ))}
      <Stack display={'flex'} flexDirection={'row'} mb={15}>
      <Button>Next</Button>
      <Button>Previous</Button>
      </Stack>
    </Box>
  );
};

export default QuizPage;

const Quiz = (e) => {
    const [bg, setBg] = useState("");
    e=e.e
    console.log(e)
  return (
    <Box mb={5} mt={50} w={'100vh'} border={'1px solid black'} bg='skyblue' color={'white'}>
        <Stack>
                <Text mb={5}>{e.question}</Text>
                <button onClick={()=>setBg('green')} style={{border:'1px solid black', background:bg}}>{e.correct_answer}</button>
                <button onClick={()=>setBg('red')}   style={{border:'1px solid black', background:bg}}>{e.incorrect_answers[1]}</button>
                <button onClick={()=>setBg('red')}   style={{border:'1px solid black', background:bg}}>{e.incorrect_answers[0]}</button>
                <button onClick={()=>setBg('red')}   style={{border:'1px solid black', background:bg}}>{e.incorrect_answers[2]}</button>
            </Stack>
    </Box>
  );
};
