import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../../theme/useStyle";
import { commonColors } from "../../theme/colors";

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.secondarycolor}>
      <Toolbar >
          <Link to="/" >
            <img src={'./logocopy.png'} alt="logo" />
          </Link>
          <Typography variant="h6">
              Learning SupplyChain Management
          </Typography>
      </Toolbar>
    </AppBar>
  );
};