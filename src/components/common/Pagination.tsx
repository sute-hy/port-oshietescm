import * as React from 'react';
import { Box, Button, Modal, Typography } from '@material-ui/core';
import { fabClasses, Stack } from '@mui/material';
import { useStyles } from '../../theme/useStyle';
import MuiPagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core/styles';
import { QuizList } from '../QuizList';
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
  //現在のページ管理用
  const [page, setPage] = useState(1);
  //正解フラグ
  const [isCorrect, setCorrect] =useState(true);
  
  //問題と選択肢を配列に格納（番号で対応）
  const questionList: string[] = new Array();
  const choiceList: string[][] = new Array();
  let handlechoiceList: string[] = new Array(); 
  quizList.forEach((item:quiz) => {
    //問題を格納
    questionList.push(item.question);
    //選択肢を格納
    choiceList.push(item.choice);
  });

  handlechoiceList = choiceList[page-1]
  //undefined時の 'cannot read property of undefined' 対策
  if (handlechoiceList === undefined){
    handlechoiceList = ["Nodata","Nodata","Nodata"]
  };

  // //選択肢をシャッフル
  // for(let i = handlechoiceList.length-1; i > 0; i--){
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [handlechoiceList[j],handlechoiceList[i]] = [handlechoiceList[i], handlechoiceList[j]];      
  // }
  //選択肢表示用の変数
  let choice1: string = handlechoiceList[0];
  let choice2: string = handlechoiceList[1];
  let choice3: string = handlechoiceList[2];

  //Pageの管理
  const handleChange = (event: React.ChangeEvent<unknown>, value: number|null) => {
    if (!value) {return};
    setPage(value);
  };

  //モーダル関係
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #E6FFE9',
    boxShadow: 24,
    p: 4,
    color: '#000000'
  };

  return (
    <>
      <Typography variant="h5">
      <br />
        {questionList[page-1]}
      </Typography>
      <br />
      <Typography className={classes.right}>
        {page}問目 / {quizList.length}問 
      </Typography>
      <br />
      <Typography variant="h6" align='center'>
        質問の答えを選択肢から選んでね
      </Typography>
      <br />
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
            { isCorrect ? "正解！！":"残念！間違い！"}
            </Typography>
          </Box>
        </Modal>
      </div>
        <div className={classes.centerbutton}>
          <Stack spacing={3}>
            <Button 
              size="large" 
              fullWidth
              variant="outlined"
              onClick={handleOpen}          
              >
              <Typography>
              {choice1}
              </Typography>
            </Button>
            <Button 
              size="large" 
              fullWidth
              variant="outlined"
              >
              {choice2}
            </Button>
            <Button 
              size="large" 
              fullWidth
              variant="outlined"
              >
              {choice3}
            </Button>
          </Stack>
        </div>
        <div className={classes.center} >
          <br/>
          <Pagination count={quizList.length} page={page} onChange={handleChange} />
        </div>
    </>
  );
}