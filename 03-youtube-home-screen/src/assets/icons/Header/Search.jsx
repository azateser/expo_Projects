import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SearchIcon = (props) => (
  <Svg width="24" height="25"  xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#0F0F0F"
      d="m20.935 20.73-5.59-5.59a6.956 6.956 0 0 0 1.72-4.58c0-3.87-3.13-7-7-7s-7 3.13-7 7a6.995 6.995 0 0 0 11.58 5.29l5.59 5.59.7-.71Zm-10.87-4.17c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Z"
    />
  </Svg>
)
export default SearchIcon
