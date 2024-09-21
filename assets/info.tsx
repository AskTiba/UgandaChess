import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const Information = (props: SvgProps) => (
  <Svg fill="#000000" viewBox="0 0 32 32" {...props}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
    <G id="SVGRepo_iconCarrier">
      <Path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM18.039 20.783c-0.981 1.473-1.979 2.608-3.658 2.608-1.146-0.187-1.617-1.008-1.369-1.845l2.16-7.154c0.053-0.175-0.035-0.362-0.195-0.419-0.159-0.056-0.471 0.151-0.741 0.447l-1.306 1.571c-0.035-0.264-0.004-0.7-0.004-0.876 0.981-1.473 2.593-2.635 3.686-2.635 1.039 0.106 1.531 0.937 1.35 1.85l-2.175 7.189c-0.029 0.162 0.057 0.327 0.204 0.379 0.16 0.056 0.496-0.151 0.767-0.447l1.305-1.57c0.035 0.264-0.024 0.726-0.024 0.902zM17.748 11.439c-0.826 0-1.496-0.602-1.496-1.488s0.67-1.487 1.496-1.487 1.496 0.602 1.496 1.487c0 0.887-0.67 1.488-1.496 1.488z" />
    </G>
  </Svg>
);
export default Information;
