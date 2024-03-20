import { Box, Button, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const setQuiz = async () => {
      try {
        const que = JSON.parse(sessionStorage.getItem("user-data"));
        const cat = que.category;
        const data = await axios.get(`http://localhost:8000/data?category=${cat}&_limit=${que.number}`);
        setQuestions(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    setQuiz();
  }, []);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setShowFeedback(false);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/leaderboard")
    }
  };

  return (
    <Box mt={50} w={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} h={'100vh'} gap={10}>
      {questions.length > 0 && (
        <Quiz e={questions[currentQuestionIndex]} showFeedback={showFeedback} handleAnswerClick={handleAnswerClick} />
      )}
      <Stack display={'flex'} flexDirection={'row'} mb={15}>
        <Button onClick={handleNextQuestion}>Next</Button>
      </Stack>
    </Box>
  );
};

export default QuizPage;

const Quiz = ({ e, showFeedback, handleAnswerClick }) => {
  const [bg, setBg] = useState("");
  const [bg1, setBg1] = useState("");
  const [bg2, setBg2] = useState("");
  const [bg3, setBg3] = useState("");
  const [select, setSelect] = useState(false);

  const handleClick = (isCorrect) => {
    handleAnswerClick(isCorrect);
    setSelect(true);
  };

  return (
    <Box mb={5} mt={50} w={'100vh'} border={'1px solid black'} bg='skyblue' color={'white'} _groupDisabled={select ? true : false}>
      <Stack>
        <Text mb={5}>{e.question}</Text>
        <button onClick={() => handleClick(true)} style={{ border: '1px solid black', background: bg }} disabled={select || showFeedback}>{e.correct_answer}</button>
        <button onClick={() => handleClick(false)} style={{ border: '1px solid black', background: bg1 }} disabled={select || showFeedback}>{e.incorrect_answers[1]}</button>
        <button onClick={() => handleClick(false)} style={{ border: '1px solid black', background: bg2 }} disabled={select || showFeedback}>{e.incorrect_answers[0]}</button>
        <button onClick={() => handleClick(false)} style={{ border: '1px solid black', background: bg3 }} disabled={select || showFeedback}>{e.incorrect_answers[2]}</button>
      </Stack>
    </Box>
  );
};
