import * as React from 'react';

const SvgTriangleDown = ({
  fill = '#000',
  width = 'auto',
  height = '100%',
  viewBox = '0 0 32 32',
  style = {
    width: '32px',
    height: '32px',
  },
  ...props
}) => (
  <svg width={16} height={8} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7.088 0H0l8 8 8-8H7.088z" fill={props.fill} fillRule="evenodd" />
  </svg>
);

export default SvgTriangleDown;
