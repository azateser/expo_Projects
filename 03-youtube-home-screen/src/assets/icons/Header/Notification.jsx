import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NotificationIcon = (props) => (
  <Svg width="24" height="25"  xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#0F0F0F"
      d="M10 20.52h4c0 1.1-.9 2-2 2s-2-.9-2-2Zm10-2.65v1.65H4v-1.65l2-1.88v-5.15c0-2.92 1.56-5.22 4-5.98v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98V16l2 1.87Zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.63 7 8.51 7 10.94v5.47l-2 1.88v.23h14v-.23Z"
    />
  </Svg>
)
export default NotificationIcon
