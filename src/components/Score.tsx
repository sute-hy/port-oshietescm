import { useStyles } from "../theme/useStyle";

export const Score = () => {
  const classes = useStyles();
  return(
    <>
    <h1>結果</h1>
    <p>XX点</p>
    <p>ランキングに登録</p>
    <p>もう一度やり直す</p>
    <p>問題数選択へ</p>
    </>
  )
};