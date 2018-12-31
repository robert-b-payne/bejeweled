import React from "react";
import classes from "./HintButton.module.css";

const HintButton = props => {
  return (
    <span className={classes.HintButton} onClick={props.clickHandler}>
      Hint
    </span>
  );
};

export default HintButton;
