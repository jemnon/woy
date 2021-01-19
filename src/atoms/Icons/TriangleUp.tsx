import * as React from 'react';

const SvgTriangleUp = ({
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
    <path d="M8.912 8H16L8 0 0 8h8.912z" fill={props.fill} fillRule="evenodd" />
  </svg>
);

export default SvgTriangleUp;
