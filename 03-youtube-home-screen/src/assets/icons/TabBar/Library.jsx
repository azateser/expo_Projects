import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LibraryIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill={props.dark ? "#fff" : "#0F0F0F"}
      d="m8.5 4.438 6 3.5-6 3.5v-7Zm7 13h-14v-14h-1v15h15v-1Zm3-2h-15v-15h15v15Zm-14-1h13v-13h-13v13Z"
    />
  </Svg>
)
export default LibraryIcon
