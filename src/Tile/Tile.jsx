import React from "react";
import classes from "./Tile.module.css";

const Tile = props => {
  let color =
    props.color === "white"
      ? "rgba(242, 242, 242, 0.02)"
      : "rgba(128, 128, 128, 0.02)";
  //   let color;
  //   if (props.color === "white") color = "grey";
  //   else color = "black";
  return (
    <div
      className={classes.Tile}
      //   height={props.size}
      //   width={props.size}
      style={{
        backgroundColor: color,
        top: props.pos.top,
        left: props.pos.left,
        height: props.size + "px",
        width: props.size + "px"
      }}
    />
  );
};

export default Tile;
