import { ClassNames } from "@emotion/react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../../theme/useStyle";

// 選択肢用のボタン
export const ChoiceButton = (choice: { choiceValue: string; }) => {
  return(
    <>
      <Button 
      size="large" 
      fullWidth
      variant="outlined"
      >
        {choice.choiceValue}
      </Button>
    </>
  );
}

//問題数選択を行うためのボタン
export const ModeButton = () => {
  return(
    <>
      <Button 
        size="large"
        component={Link}
        to="/quiz"
        fullWidth
        variant="outlined"
      >
        X問
      </Button>
      <br/>
    </>
  );
}

// 成否判定中のボタン
{/* <LoadingButton
  onClick={handleClick}
  loading={loading}
  loadingIndicator="Loading..."
  variant="outlined"
>
Fetch data
</LoadingButton>

function handleClick() {
  setLoading(true);
} */}
