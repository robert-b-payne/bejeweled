import React from "react";
import classes from "./Button_Container.module.css";

const Button_Container = props => {
  return (
    <div className={classes.Container} style={{ width: props.width + "px" }}>
      {props.children}
    </div>
  );
};

export default Button_Container;
