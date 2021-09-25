import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  primarycolor: {
    background: '#a5d6a7'
  },
  secondarycolor: {
    background: '#66bb6a'
  },
  center: {
    alignItems: 'center',
    textAlign: 'center',
    justify: 'center'
  },
  right: {
    alignItems: 'right',
    textAlign: 'right',
    justify: 'right'
  },
  left: {
    alignItems: 'left',
    textAlign: 'left',
    justify: 'left'
  },
  centerbutton: {
    width: '75%',
    margin: 'auto'
  },
  title: {
    textAlign: 'center',
  },
  root: {
    display: "flex",
    flexDirection: 'column',
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  }})
  )