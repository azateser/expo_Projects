import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SubscriptionsIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill={props.dark ? "#fff" : "#0F0F0F"}
      d="M8.5 15.438v-6l5 3-5 3Zm7-15h-10v1h10v-1Zm3 3h-16v1h16v-1Zm2 3H.5v12h20v-12Zm-19 1h18v10h-18v-10Z"
    />
  </Svg>
)
export default SubscriptionsIcon
