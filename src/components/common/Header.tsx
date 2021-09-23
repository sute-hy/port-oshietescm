import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" >
          <Link to="/">
           <p>SCM一問一答</p>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};