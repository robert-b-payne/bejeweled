import React, { Component } from "react";
import classes from "./Gem.module.css";
// import Yellow_Border from "../assets/yellow.png";
// import Blue_Border from "../assets/blue.png";
// import Green_Border from "../assets/green.png";

import Red from "../assets/gems/red_gem.png";
import Green from "../assets/gems/green_gem.png";
import Blue from "../assets/gems/blue_gem.png";
import White from "../assets/gems/white_gem.png";
import Pink from "../assets/gems/pink_gem.png";
import Yellow from "../assets/gems/yellow_gem.png";
import Orange from "../assets/gems/orange_gem.png";

class Gem extends Component {
  // let border;
  // switch (props.color) {
  //   case "blue":
  //     border = Blue_Border;
  //     break;
  //   case "green":
  //     border = Green_Border;
  //     break;
  //   case "yellow":
  //     border = Yellow_Border;
  //     break;
  //   default:
  //     border = Yellow_Border;
  // }

  //dotted rgba(49, 156, 22, 1) 2px"
  state = {
    cursorFrequency: 400,
    cursorOn: false,
    cursorTimerId: null,
    border: "dotted rgba(66, 244, 89, 1) 2px",
    opacity: 1,
    width: null,
    widthLower: 0.65,
    widthUpper: 0.75,
    gemScale: 1, //scaling for hint
    gemMaxScale: 1.2,
    gemRotate: 0
  };

  hintState = {
    hintTimerId: null,
    hintOn: false,
    gemRotateLeft: -10,
    gemRotateRight: 10
  };

  constructor() {
    super();
    this.state.width = this.state.widthLower;
  }

  render() {
    if (!this.state.cursorOn && this.props.selected) {
      // console.log("turning on timer!");
      //turn on timer
      this.setState({
        cursorOn: true,
        width: this.state.widthUpper
        // opacity: 1
      });
      let timerId = setInterval(() => {
        let opacity = this.state.opacity ^ 1;
        let width;
        if (this.state.width === this.state.widthUpper)
          width = this.state.widthLower;
        else width = this.state.widthUpper;
        // let width = this.state.width ^ 2;
        let border = "dotted rgba(66, 244, 89, " + opacity + ") 2px";
        this.setState({ border: border, opacity: opacity, width: width });
      }, this.state.cursorFrequency);
      //set cursorOn
      this.setState({ cursorTimerId: timerId });
    } else if (this.state.cursorOn && !this.props.selected) {
      //disable timer
      // console.log("disabling timer!");
      clearInterval(this.state.cursorTimerId);
      this.setState({
        cursorTimerId: null,
        cursorOn: false,
        opacity: 1,
        width: this.state.widthLower,
        border: "dotted rgba(66, 244, 89, 1) 2px"
      });
      //clear cursorOn
    }

    //animate hint
    if (this.props.hint && !this.hintState.hintOn) {
      this.hintState.hintOn = true;
      this.hintState.timerId = setInterval(() => {
        if (this.state.gemScale === this.state.gemMaxScale) {
          this.setState({ gemScale: 1 });
        } else this.setState({ gemScale: this.state.gemMaxScale });
        setTimeout(() => {
          if (this.state.gemScale === this.state.gemMaxScale) {
            this.setState({ gemScale: 1 });
          } else this.setState({ gemScale: this.state.gemMaxScale });
        }, 280);
      }, 850);
      //   if (this.state.gemRotate !== this.hintState.gemRotateRight) {
      //     this.setState({ gemRotate: this.hintState.gemRotateRight });
      //   } else this.setState({ gemRotate: this.hintState.gemRotateLeft });
      // }, 500);
    }

    if (this.hintState.hintOn && !this.props.hint) {
      clearInterval(this.hintState.hintTimerId);
      this.setState({ gemScale: this.state.gemMaxScale });
    }

    let selectedClass = this.props.selected ? classes.Border : null;

    let gem;
    switch (this.props.gem) {
      case 0:
        gem = Red;
        break;
      case 1:
        gem = Green;
        break;
      case 2:
        gem = Blue;
        break;
      case 3:
        gem = White;
        break;
      case 4:
        gem = Pink;
        break;
      case 5:
        gem = Yellow;
        break;
      case 6:
        gem = Orange;
        break;
      default:
        gem = null;
    }

    // console.log("index is " + props.index);

    return (
      <span
        className={classes.OuterContainer}
        style={{
          left: this.props.pos.left,
          top: this.props.pos.top
        }}
      >
        <span //border
          className={selectedClass}
          style={{
            height: this.props.size * this.state.width,
            width: this.props.size * this.state.width,
            border: this.state.cursorOn ? this.state.border : "0px solid black"
            // borderRadius: "50px"
          }}
        >
          <span
            className={classes.Gem}
            style={{
              backgroundImage: "url('" + gem + "')",
              backgroundPosition: "center",
              backgroundSize:
                this.props.size * 0.5 + "px " + this.props.size * 0.5 + "px",
              height: this.props.size,
              width: this.props.size,
              // left: this.props.pos.left,
              // top: this.props.pos.top,
              transform: this.props.dead
                ? "scale(0)"
                : this.props.hint
                ? "scale(" + this.state.gemScale + ")"
                : "scale(1)",
              //   +
              //   " rotate(" +
              //   this.state.gemRotate +
              //   "deg)"
              // : "scale(1)",
              transition: "all 0.3s ease-out"
            }}
            onClick={() => this.props.clickHandler(this.props.index)}
          />
        </span>
      </span>
    );
  }
}

export default Gem;
