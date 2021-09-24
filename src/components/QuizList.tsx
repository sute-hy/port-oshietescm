import React, {useState, useEffect} from 'react';
import axios from "axios";
import { TodayOutlined } from '@material-ui/icons';
import { ulid } from 'ulid';
import { shuffleQuizorder } from './common/Shuffle';
import { quiz } from './common/Pagination';

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
  // <ul>
  //   {quizList.map((quiz:any) => (
  //     <li key={quiz.id}>
  //       {quiz.question}
  //       {quiz.choice}
  //     </li>
  //   ))}
  // </ul>