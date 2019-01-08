import React from "react";
import DigitalDisplay from "../DigitalDisplay/DigitalDisplay";
import classes from "./Score.module.css";

const Score = props => {
  return (
    <div className={classes.container}>
      <span style={{ color: "white" }}>Score</span>
      <DigitalDisplay val={props.val} />
    </div>
  );
};

export default Score;
