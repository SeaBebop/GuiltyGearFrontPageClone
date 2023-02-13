import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 40 40"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    width={"10vw"}
    height={"10vw"}
    {...props}
  >
    <Path
      style={{
        fill: "#FFFFFF",
      }}
      points="187.368,146.928 187.368,355.8 382.992,251.368 "
      d="M14.639 11.479L14.639 27.797L29.921 19.639Z"
    />
    <Path
      style={{
        fill: "#DB2B42",
      }}
      d="M20 0.029C8.955 0.029 0 8.971 0 20s8.955 19.971 20 19.971S40 31.029 40 20S31.045 0.029 20 0.029zM14.413 11.479l15.283 8.16L14.413 27.797V11.479z"
    />
  </Svg>
);
export default SVGComponent;
