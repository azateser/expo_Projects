import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const LibraryActiveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#0F0F0F"
        fillRule="evenodd"
        d="M6.5 2h16v16h-16V2Zm-3 4h1v14h14v1h-14l-.253.001c-.377.003-.566.005-.66-.088-.093-.094-.092-.283-.088-.66V6Zm15 4-6-4.5v9l6-4.5Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default LibraryActiveIcon
