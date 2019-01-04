import React from "react";
import classes from "./Button.module.css";

const Button = props => {
  let inlineStyle = props.top
    ? { top: props.top + "%" }
    : { bottom: props.bottom + "%" };
  return (
    <div style={inlineStyle} className={classes.Container}>
      <span className={classes.Button} onClick={props.clickHandler}>
        {props.children}
      </span>
    </div>
  );
};

export default Button;
