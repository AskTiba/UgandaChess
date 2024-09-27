import * as React from 'react';
import Svg, { Polygon, Path, SvgProps } from 'react-native-svg';
const Twitter = (props: SvgProps) => (
  <Svg x="0px" y="0px" width={100} height={100} viewBox="0 0 48 48" {...props}>
    <Polygon fill="#616161" points="41,6 9.929,42 6.215,42 37.287,6" />
    <Polygon
      fill="#fff"
      fillRule="evenodd"
      points="31.143,41 7.82,7 16.777,7 40.1,41"
      clipRule="evenodd"
    />
    <Path
      fill="#616161"
      d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
    />
  </Svg>
);
export default Twitter;
