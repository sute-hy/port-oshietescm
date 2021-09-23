import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


// export const ChoiceButton = () => {
//   return(
//     <>
//       <Choice />
//       <Choice />
//       <Choice />
//     </>
//   )
// }

// 選択肢用のボタン
export const ChoiceButton = () => {
  return(
    <>
      <Button 
      size="large" 
      fullWidth
      >
      選択肢
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
