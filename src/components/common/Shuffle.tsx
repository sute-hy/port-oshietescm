import { useState, useEffect } from "react";
import { quiz } from "./Pagination";

//問題の出題順をシャッフルする関数
//★選択肢のシャッフルと共通化
export function shuffleQuizorder(quiz: quiz[]){
    for(let i = quiz.length-1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [quiz[j],quiz[i]] = [quiz[i], quiz[j]];      
    }
    console.log("shuffled quiz");
  return quiz
}

//選択肢をシャッフルする関数
//★問題のシャッフルと共通化
export function shuffleChoice(choice: string[] | string[]){
  for(let i = choice.length-1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [choice[j],choice[i]] = [choice[i], choice[j]];      
  }
  return choice;
}