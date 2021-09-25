import {useState, useEffect} from 'react';
import axios from "axios";

const quizDataUrl = "http://localhost:9999/quiz";

//Apiを介して初回レンダリング時に、クイズデータを取得してリストにセットする
export const QuizList = () => {
  const [quizList, setQuizList] = useState([]);
  useEffect(() => {
    const fetchquizData = async () => {
      const response = await axios.get(quizDataUrl);
      setQuizList(response.data);
    };
    fetchquizData();
    console.log("fetched");
  },[]);
  
  return(
    [...quizList]
    );

  }