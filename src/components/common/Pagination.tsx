import * as React from 'react';
import { Typography } from '@material-ui/core';
import  Pagination  from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import { ChoiceButton } from './Button';
import { useStyles } from '../../theme/useStyle';
import MuiPagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core/styles';
import { QuizList } from '../QuizList';
import { shuffleQuizorder } from './Shuffle';
import { useState } from 'react';

export interface quiz {
  id: number,
  question: string,
  choice: string[]
}

export default function PaginationControlled() {
  const classes = useStyles();
  //Paginationの中央揃えのために、上位構造のスタイルを変更する
  const Pagination = withStyles({
    root: {
      display: 'inline-block',
    },
  })(MuiPagination);
  const quizList: quiz[] = QuizList();

  // シャッフルの実装は後回し
  // useEffectの返り値問題と、usestateの２次元配列処理が課題
  // API側での実装も視野にいれる
  // const shuffledquizList = shuffleQuizorder(quizList);

  //問題と選択肢を配列に格納（番号で対応）
  const questionList: string[] = new Array();
  const choiceList: string[][] = new Array();
  quizList.forEach((item:quiz) => {
    //問題を格納
    questionList.push(item.question);
    //選択肢を格納
    choiceList.push(item.choice);
  });

  // 選択肢をシャッフル
  // 実装は後回し

  //状態は後にreduxを導入して管理 現在のページ
  const [page, setPage] = React.useState(1);

  //問題の数
  //Pageの管理
  const handleChange = (event: React.ChangeEvent<unknown>, value: number|null) => {
    if (!value) {return};
    setPage(value);
  };

  return (
    <>
      <Typography variant="h5">
      <br />
        {questionList[page-1]}
        {/* {choiceList[page-1][1]}
        {choiceList[page-1][2]}
        {choiceList[page-1][3]} */}
      </Typography>
      <br />
      <Typography className={classes.right}>{page}問目 / {quizList.length}問 </Typography>
        <div className={classes.centerbutton}>
          <Stack spacing={2}>
            {/* {/* <ChoiceButton choice= {choiceList[page-1][2]}/> */}
            {/* <ChoiceButton choice= {choiceList[page-1][3]}/> */}
          </Stack>
        </div>
      <div className={classes.center} >
        <br/>
        <Pagination count={quizList.length} page={page} onChange={handleChange} />
      </div>
    </>
  );
}