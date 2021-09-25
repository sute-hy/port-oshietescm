import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../theme/useStyle";


export const Start = () => {
  const classes = useStyles();
  return (
    <>
    <Typography variant="h3" align='center'>
      <br />
      SCM用語クイズ
    </Typography>
    <br />
    <div className={classes.center}>
    <img src={'./logo250.png'} alt="logo" />
    </div>
    <div className={classes.centerbutton}>
    <Button 
      size="large"
      component={Link}
      to="/mode"
      fullWidth
      variant="outlined"
    >
    始める
    </Button>
    </div>
    </>
  )
};