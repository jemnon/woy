import * as React from 'react';

const SvgTriangleUp = ({
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
    <path d="M8.912 8H16L8 0 0 8h8.912z" fill="#000" fillRule="evenodd" />
  </svg>
);

export default SvgTriangleUp;
