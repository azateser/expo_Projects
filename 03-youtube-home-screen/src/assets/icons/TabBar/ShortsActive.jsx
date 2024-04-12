import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ShortsActiveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.dark ? "#fff" : "#0F0F0F"}
      fillRule="evenodd"
      d="M5.032 7.974c-1.87 1.048-2.51 3.367-1.43 5.181.603 1.014 1.539 1.699 2.543 1.94-1.384 1.167-1.768 3.158-.817 4.756 1.079 1.814 3.469 2.436 5.337 1.389l9.303-5.214c1.869-1.047 2.51-3.367 1.43-5.18a3.898 3.898 0 0 0-2.674-1.834c1.49-1.15 1.928-3.215.948-4.863-1.08-1.814-3.469-2.435-5.338-1.388L5.033 7.974Z"
      clipRule="evenodd"
    />
    <Path fill={props.dark ? "#0F0F0F" : "#fff"} d="m10.629 9.755 5.295 2.967-5.295 2.968V9.755Z" />
  </Svg>
)
export default ShortsActiveIcon
