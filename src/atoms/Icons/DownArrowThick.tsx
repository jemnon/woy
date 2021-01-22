import * as React from 'react';

const SvgDownArrowThick = ({
  fill = '#000',
  width = '100%',
  height = '100%',
  viewBox = '0 0 32 32',
  style = {
    width: '32px',
    height: '32px',
  },
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    preserveAspectRatio="xMidYMid meet"
    style={style}
    {...props}
  >
    <path
      d="M34.874 0L18 16.875 1.125 0 0 1.125 16.875 18 18 19.124 19.125 18 36 1.125z"
      fill="#111"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDownArrowThick;
