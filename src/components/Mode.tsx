import { ModeButton } from "./common/Button";
import { useStyles } from "../theme/useStyle";
import { Stack } from '@mui/material';
import { Typography } from "@material-ui/core";

export const Mode = () => {
  const classes = useStyles();
  return(
    <>
    <Typography variant="h4" align='center'>
    <br />
    難易度を選択してね
    </Typography>
    <br />
    <div className={classes.centerbutton}>
    <Stack spacing={1}>
      <ModeButton modeValue= "かんたん"/>
      <ModeButton modeValue= "ふつう"/>
      <ModeButton modeValue= "むずかしい"/>
    </Stack >
    </div>
    </>
  )
};