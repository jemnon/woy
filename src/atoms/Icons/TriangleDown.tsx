import * as React from 'react';

const SvgTriangleDown = ({
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
    <path d="M7.088 0H0l8 8 8-8H7.088z" fill="#000" fillRule="evenodd" />
  </svg>
);

export default SvgTriangleDown;
