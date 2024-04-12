import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ShortsIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="red"
      fillRule="evenodd"
      d="M4.766 7.733c-1.81 1.11-2.43 3.569-1.385 5.491.584 1.075 1.491 1.8 2.463 2.056-1.34 1.237-1.711 3.347-.79 5.041 1.044 1.923 3.359 2.582 5.169 1.472l9.01-5.526c1.81-1.11 2.43-3.569 1.386-5.491-.577-1.06-1.54-1.737-2.59-1.943 1.442-1.219 1.867-3.408.918-5.154-1.045-1.923-3.36-2.582-5.17-1.472l-9.01 5.526Z"
      clipRule="evenodd"
    />
    <Path fill="#fff" d="m10.188 9.62 5.128 3.145-5.128 3.145V9.62Z" />
  </Svg>
)
export default ShortsIcon
