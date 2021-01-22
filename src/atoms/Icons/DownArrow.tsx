import * as React from 'react';

const SvgDownArrow = ({
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
      d="M1.414.536L0 1.95l7.072 7.07 1.414 1.416L16.97 1.95 15.556.536l-7.07 7.07z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDownArrow;
