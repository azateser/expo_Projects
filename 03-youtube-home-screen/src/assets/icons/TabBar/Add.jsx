import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AddIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={35}
    fill="none"
    viewBox="0 0 35 35"
    {...props}
  >
    <Path
      fill={props.dark ? "#fff" : "#0F0F0F"}
      fillRule="evenodd"
      d="M16.5 30.083c7.819 0 14.157-6.338 14.157-14.157 0-7.818-6.338-14.156-14.157-14.156S2.343 8.108 2.343 15.926c0 7.819 6.338 14.157 14.157 14.157Zm0 1.77c8.796 0 15.926-7.13 15.926-15.927C32.426 7.13 25.296 0 16.5 0S.574 7.13.574 15.926 7.704 31.852 16.5 31.852Z"
      clipRule="evenodd"
    />
    <Path
      fill={props.dark ? "#fff" : "#0F0F0F"}
      fillRule="evenodd"
      d="M26.056 17.519H6.944v-2.39h19.112v2.39Z"
      clipRule="evenodd"
    />
    <Path
      fill={props.dark ? "#fff" : "#0F0F0F"}
      fillRule="evenodd"
      d="M14.907 25.482V6.37h2.39v19.112h-2.39Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AddIcon
