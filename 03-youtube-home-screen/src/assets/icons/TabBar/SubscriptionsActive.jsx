import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SubscriptionsActiveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <G fill="#0F0F0F" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M4.5 7.13h16v-1h-16v1Zm2-4h12v1h-12v-1ZM21.5 21.13h-18v-12h18v12Zm-11-9.27 6 3.27-6 3.26v-6.53Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5.13h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SubscriptionsActiveIcon
