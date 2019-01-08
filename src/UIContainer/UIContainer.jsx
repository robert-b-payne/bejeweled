import React from "react";
import classes from "./UIContainer.module.css";

const UIContainer = props => {
  return (
    <div className={classes.container} style={{ width: props.width + "px" }}>
      {props.children}
    </div>
  );
};

export default UIContainer;
