import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <>
    <h1>SCM一問一答クイズ</h1>
    <p>SCM用語の意味を答えよう</p>
    <Button 
    size="large"
    component={Link}
    to="/mode"
    fullWidth
    >
    始める
    </Button>
    </>
  )
};