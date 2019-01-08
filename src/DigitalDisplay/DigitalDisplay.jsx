import React from "react";
// import empty_digit from "../assets/numbers/empty_digit.svg";
import zero_digit from "../assets/numbers/zero_digit.svg";
import one_digit from "../assets/numbers/one_digit.svg";
import two_digit from "../assets/numbers/two_digit.svg";
import three_digit from "../assets/numbers/three_digit.svg";
import four_digit from "../assets/numbers/four_digit.svg";
import five_digit from "../assets/numbers/five_digit.svg";
import six_digit from "../assets/numbers/six_digit.svg";
import seven_digit from "../assets/numbers/seven_digit.svg";
import eight_digit from "../assets/numbers/eight_digit.svg";
import nine_digit from "../assets/numbers/nine_digit.svg";
import negative_digit from "../assets/numbers/negative.svg";
import classes from "./DigitalDisplay.module.css";

const DigitalDisplay = props => {
  let num = props.val;
  let negative = num < 0 ? true : false;
  // console.log("negative: " + negative);
  // if (props.val > 9999) num = 9999;
  if (props.val < -99) num = -99;
  if (negative) {
    num = num * -1;
  }
  let tempNum;
  let image;
  let numArray = [];
  let index = 0;
  // console.log("rendering DigitalDisplay . . . ");
  // console.log("input value: " + num);
  do {
    tempNum = num % 10;
    switch (tempNum) {
      case 0:
        image = zero_digit;
        break;
      case 1:
        image = one_digit;
        break;
      case 2:
        image = two_digit;
        break;
      case 3:
        image = three_digit;
        break;
      case 4:
        image = four_digit;
        break;
      case 5:
        image = five_digit;
        break;
      case 6:
        image = six_digit;
        break;
      case 7:
        image = seven_digit;
        break;
      case 8:
        image = eight_digit;
        break;
      case 9:
        image = nine_digit;
        break;
    }
    // console.log("pushing value " + tempNum);
    numArray.push(
      // <span key={index}>
      <img src={image} className={classes.digit} key={index} />
      // {/* </span> */}
    );
    num = Math.floor(num / 10);
    index++;
  } while (num >= 1);

  let correctNumArray = [];
  //reverse order of array
  for (let i = numArray.length - 1; i >= 0; i--) {
    correctNumArray.push(numArray[i]);
  }

  //add leading 0's padding
  while (correctNumArray.length < 8) {
    correctNumArray.splice(
      0,
      0,
      <span key={correctNumArray.length}>
        <img src={zero_digit} className={classes.digit} />
      </span>
    );
  }

  // if (props.mineCounter) {
  if (negative) {
    correctNumArray.splice(
      0,
      1,
      <span key={"negative"}>
        <img src={negative_digit} className={classes.digit} />
      </span>
    );
  }
  // else {
  //   correctNumArray.splice(
  //     0,
  //     0,
  //     <span key={"empty"}>
  //       <img src={empty_digit} className={classes.digit} />
  //     </span>
  //   );
  // }
  // }

  // console.log(correctNumArray);

  return <span className={classes.container}>{correctNumArray}</span>;
};

export default DigitalDisplay;
