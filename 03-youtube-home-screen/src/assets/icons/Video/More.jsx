import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const MoreIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={57}
    fill="none"
    {...props}
  >
    <Rect width={2} height={2} x={28} y={4} fill="#0F0F0F" rx={1} />
    <Rect width={2} height={2} x={28} y={9} fill="#0F0F0F" rx={1} />
    <Rect width={2} height={2} x={28} y={14} fill="#0F0F0F" rx={1} />
  </Svg>
)
export default MoreIcon
