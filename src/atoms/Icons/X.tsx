import * as React from 'react';

const SvgX = ({
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
      d="M14.142 0L7.778 6.364 1.415 0 0 1.415l6.364 6.364L0 14.143l1.415 1.414 6.363-6.364 6.364 6.364 1.415-1.414-6.364-6.364 6.364-6.364z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgX;
