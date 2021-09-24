import * as React from 'react';
import { Typography } from '@material-ui/core';
import  Pagination  from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import { ChoiceButton } from './Button';
import { useStyles } from '../../theme/useStyle';
import MuiPagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core/styles';

export default function PaginationControlled() {
  const classes = useStyles();
  //Paginationの中央揃えのために、上位構造のスタイルを変更する
  const Pagination = withStyles({
    root: {
      display: 'inline-block',
    },
  })(MuiPagination);

  //状態は後にreduxを導入して管理
  //現在のページ
  const [page, setPage] = React.useState(1);
  //問題の数
  const quizNumber: number = 10;
  
  //Pageの管理
  const handleChange = (event: React.ChangeEvent<unknown>, value: number|null) => {
    if (!value) {return};
    setPage(value);
  };

  return (
    <>
        <Typography variant="h5">
        <br />
          {page}問題文...?
        </Typography>
        <br />
        <Typography className={classes.right}>{page}問目 / {quizNumber}問 </Typography>
          <div className={classes.centerbutton}>
            <Stack spacing={2}>
              <ChoiceButton />
              <ChoiceButton />
              <ChoiceButton />
            </Stack>
          </div>
        <div className={classes.center} >
          <br/>
          <Pagination count={quizNumber} page={page} onChange={handleChange} />
        </div>
    </>
  );
}