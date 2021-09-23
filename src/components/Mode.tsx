import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ModeButton } from "./common/Button";


export const Mode = () => {
  return(
    <>
    <h1>問題数をえらんでね</h1>
    <ModeButton />
    <ModeButton />
    <ModeButton />
    </>
  )
};