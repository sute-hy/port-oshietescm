import { ChoiceButton } from "./common/Button"
import { Fragment } from "react";
import PaginationControlled from "./common/Pagination";
import { useStyles } from "../theme/useStyle";
import { Container } from "@material-ui/core";

export const Quiz = () => {
  const classes = useStyles();
  return(
    <>
    <PaginationControlled />
    </>
  )
};