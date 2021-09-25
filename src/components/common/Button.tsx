import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

//問題数選択を行うためのボタン
export const ModeButton = (mode: any) => {
  return(
    <>
      <Button 
        size="large"
        component={Link}
        to="/quiz"
        fullWidth
        variant="outlined"
      >
        {mode.modeValue}
      </Button>
      <br/>
    </>
  );
}
