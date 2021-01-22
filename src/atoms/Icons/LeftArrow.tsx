import * as React from 'react';

const SvgLeftArrow = ({
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
      d="M9.021 0L1.95 7.071.536 8.485l8.485 8.485 1.414-1.413-7.07-7.072 7.07-7.07z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgLeftArrow;
