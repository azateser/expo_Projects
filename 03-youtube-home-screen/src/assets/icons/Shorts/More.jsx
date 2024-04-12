import * as React from "react"
import Svg, { G, Rect, Defs } from "react-native-svg"
const ShortsMoreIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={20}
    fill="none"
    viewBox="0 0 9 19"
    {...props}
  >
    <G fill="#fff" filter="url(#a)">
      <Rect width={2.5} height={2.5} x={3.5} y={3} rx={1.25} />
      <Rect width={2.5} height={2.5} x={3.5} y={8} rx={1.25} />
      <Rect width={2.5} height={2.5} x={3.5} y={13} rx={1.25} />
    </G>
    <Defs></Defs>
  </Svg>
)
export default ShortsMoreIcon
