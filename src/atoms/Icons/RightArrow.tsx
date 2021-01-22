import * as React from 'react';

const SvgRightArrow = ({
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
      d="M1.95 0L.536 1.414l7.07 7.071-7.07 7.072L1.95 16.97 9.02 9.9l1.415-1.415z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgRightArrow;
