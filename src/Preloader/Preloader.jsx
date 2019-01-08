import React from "react";

import Red from "../assets/gems/red_gem.png";
import Green from "../assets/gems/green_gem.png";
import Blue from "../assets/gems/blue_gem.png";
import White from "../assets/gems/white_gem.png";
import Pink from "../assets/gems/pink_gem.png";
import Yellow from "../assets/gems/yellow_gem.png";
import Orange from "../assets/gems/orange_gem.png";
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
import Background_Image from "../assets/space_darkened.png";

const Preloader = props => {
  return (
    <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
      <img src={Red} />
      <img src={Green} />
      <img src={Blue} />
      <img src={White} />
      <img src={Pink} />
      <img src={Yellow} />
      <img src={Orange} />
      <img src={zero_digit} />
      <img src={one_digit} />
      <img src={two_digit} />
      <img src={three_digit} />
      <img src={four_digit} />
      <img src={five_digit} />
      <img src={six_digit} />
      <img src={seven_digit} />
      <img src={eight_digit} />
      <img src={nine_digit} />
      <img src={Background_Image} onLoad={props.loadHandler} />
    </div>
  );
};

export default Preloader;
