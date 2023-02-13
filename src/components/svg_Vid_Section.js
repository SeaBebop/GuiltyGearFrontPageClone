import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width="7vw"
    height="7vw"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill="none"
      stroke="#000"
      strokeWidth={2.5}
      d="M15 27.5C21.904 27.5 27.5 21.904 27.5 15C27.5 8.096 21.904 2.5 15 2.5C8.096 2.5 2.5 8.096 2.5 15C2.5 21.904 8.096 27.5 15 27.5ZM11.875 19.375L19.375 15L11.875 10.625L11.875 19.375ZM13.125 16.875L15.625 15L13.125 13.125L13.125 16.875Z"
    />
  </Svg>
);
export default SVGComponent;
