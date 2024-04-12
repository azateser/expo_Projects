import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const ExploreIcon = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="M12.19-2.19 5-5l2.81 7.19L15 5ZM8.9 0c0 .61.49 1.1 1.1 1.1.61 0 1.1-.49 1.1-1.1 0-.61-.49-1.1-1.1-1.1-.61 0-1.1.49-1.1 1.1z"
      style={{
        fill: "#0f0f0f",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "none",
      }}
      transform="matrix(1.33333 0 0 -1.33333 2.667 16)"
    />
    <Path
      d="m5-5 7.19 2.81L15 5 7.81 2.19Zm3.9 5c0 .61.49 1.1 1.1 1.1.61 0 1.1-.49 1.1-1.1 0-.61-.49-1.1-1.1-1.1-.61 0-1.1.49-1.1 1.1z"
      style={{
        fill: "#0f0f0f",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "none",
      }}
      transform="matrix(1.33333 0 0 -1.33333 2.667 16)"
    />
    <Path
      d="M10 20C4.48 20 0 15.52 0 10S4.48 0 10 0s10 4.48 10 10-4.48 10-10 10ZM1 10a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"
      style={{
        fill: "#0f0f0f",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "none",
      }}
      transform="matrix(1.33333 0 0 -1.33333 2.667 29.333)"
    />
  </Svg>
)
export default ExploreIcon
