import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Binoculars = (props: SvgProps) => (
  <Svg x="0px" y="0px" width={100} height={100} viewBox="0 0 50 50" {...props}>
    <Path d="M 14 5 C 11.089844 5 8.609375 7.070313 8.15625 9.875 C 8.144531 9.941406 8.101563 9.996094 8.09375 10.0625 L 8.125 10.0625 C 8.089844 10.214844 8.050781 10.355469 8.03125 10.5 C 7.726563 10.710938 7.433594 10.9375 7.1875 11.1875 C 6.011719 12.375 5.515625 13.867188 5.15625 15.09375 C 5.152344 15.101563 5.160156 15.117188 5.15625 15.125 C 3.859375 19.113281 1.535156 28.554688 1 30.71875 C 0.375 32.023438 0 33.460938 0 35 C 0 40.511719 4.488281 45 10 45 C 15.386719 45 19.769531 40.714844 19.96875 35.375 C 21.101563 36.210938 22.742188 37 25 37 C 27.257813 37 28.898438 36.210938 30.03125 35.375 C 30.230469 40.714844 34.613281 45 40 45 C 45.511719 45 50 40.511719 50 35 C 50 33.871094 49.816406 32.792969 49.46875 31.78125 C 49.304688 31.125 46.351563 19.390625 45.0625 15.125 L 45.0625 15.09375 C 44.65625 13.875 44.117188 12.382813 42.9375 11.1875 C 42.644531 10.890625 42.3125 10.617188 41.9375 10.375 C 41.917969 10.269531 41.902344 10.171875 41.875 10.0625 L 41.90625 10.0625 C 41.898438 9.996094 41.855469 9.941406 41.84375 9.875 C 41.390625 7.070313 38.910156 5 36 5 C 32.675781 5 30 7.675781 30 11 C 30 11.734375 30.121094 12.445313 30.34375 13.09375 C 29.878906 13.632813 29.488281 14.121094 29.21875 14.375 C 29.105469 14.480469 29.097656 14.476563 29.0625 14.5 C 27.925781 13.664063 26.554688 13.09375 25.09375 13.09375 C 23.636719 13.09375 22.203125 13.617188 21.09375 14.5 C 21.054688 14.476563 21.050781 14.480469 20.9375 14.375 C 20.644531 14.101563 20.203125 13.566406 19.6875 12.96875 C 19.886719 12.351563 20 11.691406 20 11 C 20 7.675781 17.324219 5 14 5 Z M 14 7 C 16.277344 7 18 8.722656 18 11 C 18 11.085938 17.972656 11.164063 17.96875 11.25 C 16.699219 10.160156 15.066406 9.1875 12.90625 9.1875 C 11.9375 9.1875 11.070313 9.28125 10.3125 9.46875 C 10.863281 8.015625 12.292969 7 14 7 Z M 36 7 C 37.691406 7 39.09375 8.003906 39.65625 9.4375 C 38.957031 9.277344 38.1875 9.1875 37.3125 9.1875 C 35.070313 9.1875 33.335938 10.230469 32.03125 11.375 C 32.019531 11.246094 32 11.125 32 11 C 32 8.722656 33.722656 7 36 7 Z M 12.90625 11.1875 C 14.902344 11.1875 16.28125 12.261719 17.4375 13.46875 C 17.449219 13.972656 17.839844 14.390625 18.34375 14.4375 C 18.769531 14.933594 19.175781 15.421875 19.59375 15.8125 C 19.878906 16.078125 20.167969 16.332031 20.625 16.46875 C 21.082031 16.605469 21.730469 16.503906 22.125 16.1875 L 22.15625 16.15625 C 22.824219 15.5625 24.050781 15.09375 25.09375 15.09375 C 26.136719 15.09375 27.234375 15.523438 28.0625 16.1875 L 28.0625 16.15625 L 28.09375 16.15625 C 28.480469 16.472656 29.117188 16.605469 29.5625 16.46875 C 30.019531 16.328125 30.28125 16.078125 30.5625 15.8125 C 30.984375 15.414063 31.402344 14.914063 31.84375 14.40625 C 32.191406 14.300781 32.457031 14.011719 32.53125 13.65625 C 33.738281 12.371094 35.207031 11.1875 37.3125 11.1875 C 38.628906 11.1875 39.566406 11.386719 40.28125 11.71875 C 40.402344 11.839844 40.554688 11.925781 40.71875 11.96875 C 40.75 11.980469 40.78125 11.992188 40.8125 12 C 41.082031 12.175781 41.324219 12.382813 41.53125 12.59375 C 42.320313 13.394531 42.765625 14.515625 43.15625 15.6875 C 43.160156 15.695313 43.152344 15.710938 43.15625 15.71875 C 43.925781 18.269531 45.207031 23.117188 46.25 27.1875 C 44.535156 25.808594 42.363281 25 40 25 C 35.46875 25 31.628906 28.042969 30.40625 32.1875 C 30.332031 32.25 30.269531 32.324219 30.21875 32.40625 C 30.21875 32.40625 28.929688 35 25 35 C 21.070313 35 19.78125 32.40625 19.78125 32.40625 C 19.730469 32.3125 19.667969 32.230469 19.59375 32.15625 C 18.363281 28.027344 14.523438 25 10 25 C 7.734375 25 5.648438 25.757813 3.96875 27.03125 C 5.003906 22.96875 6.257813 18.195313 7.0625 15.71875 L 7.0625 15.6875 C 7.402344 14.523438 7.804688 13.394531 8.59375 12.59375 C 9.382813 11.792969 10.59375 11.1875 12.90625 11.1875 Z M 25 25 C 22.800781 25 21 26.800781 21 29 C 21 31.199219 22.800781 33 25 33 C 27.199219 33 29 31.199219 29 29 C 29 26.800781 27.199219 25 25 25 Z M 10 27 C 14.429688 27 18 30.570313 18 35 C 18 39.429688 14.429688 43 10 43 C 5.570313 43 2 39.429688 2 35 C 2 34.398438 2.0625 33.8125 2.1875 33.25 C 2.386719 33.097656 2.519531 32.875 2.5625 32.625 C 2.5625 32.625 2.824219 31.546875 2.875 31.34375 C 4.199219 28.761719 6.890625 27 10 27 Z M 25 27 C 26.117188 27 27 27.882813 27 29 C 27 30.117188 26.117188 31 25 31 C 23.882813 31 23 30.117188 23 29 C 23 27.882813 23.882813 27 25 27 Z M 40 27 C 43.484375 27 46.429688 29.214844 47.53125 32.3125 C 47.535156 32.328125 47.625 32.65625 47.625 32.65625 C 47.652344 32.757813 47.695313 32.851563 47.75 32.9375 C 47.925781 33.59375 48 34.285156 48 35 C 48 39.429688 44.429688 43 40 43 C 35.570313 43 32 39.429688 32 35 C 32 30.570313 35.570313 27 40 27 Z M 4.90625 33.96875 C 4.863281 33.976563 4.820313 33.988281 4.78125 34 C 4.316406 34.105469 3.988281 34.523438 4 35 C 4 38.324219 6.675781 41 10 41 C 10.359375 41.003906 10.695313 40.816406 10.878906 40.503906 C 11.058594 40.191406 11.058594 39.808594 10.878906 39.496094 C 10.695313 39.183594 10.359375 38.996094 10 39 C 7.722656 39 6 37.277344 6 35 C 6.011719 34.710938 5.894531 34.433594 5.6875 34.238281 C 5.476563 34.039063 5.191406 33.941406 4.90625 33.96875 Z M 35.90625 33.96875 C 35.863281 33.976563 35.820313 33.988281 35.78125 34 C 35.316406 34.105469 34.988281 34.523438 35 35 C 35 38.324219 37.675781 41 41 41 C 41.359375 41.003906 41.695313 40.816406 41.878906 40.503906 C 42.058594 40.191406 42.058594 39.808594 41.878906 39.496094 C 41.695313 39.183594 41.359375 38.996094 41 39 C 38.722656 39 37 37.277344 37 35 C 37.011719 34.710938 36.894531 34.433594 36.6875 34.238281 C 36.476563 34.039063 36.191406 33.941406 35.90625 33.96875 Z" />
  </Svg>
);
export default Binoculars;
