import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../theme/useStyle";


export const Start = () => {
  const classes = useStyles();
  return (
    <>
    <Typography variant="h3" align='center'>
      <br />
      おしえて！SCM
    </Typography>
    <Typography variant="h4" align='center'>
      SCM用語クイズ
    </Typography>
    <br />
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