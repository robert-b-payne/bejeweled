import React from "react";
import classes from "./Reset.module.css";

const Reset = props => {
  return (
    <span className={classes.Button} onClick={props.resetHandler}>
      Reset
    </span>
  );
};

export default Reset;
