import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill={props.dark ? "#fff" : "#0F0F0F"}
      d="m8.5 1.33 7 6.12V17h-4v-6h-6v6h-4V7.45l7-6.12ZM8.5 0l-8 7v11h6v-6h4v6h6V7l-8-7Z"
    />
  </Svg>
)
export default HomeIcon
