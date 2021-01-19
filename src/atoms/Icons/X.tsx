import * as React from 'react';

const SvgX = ({
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
  <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.142 0L7.778 6.364 1.415 0 0 1.415l6.364 6.364L0 14.143l1.415 1.414 6.363-6.364 6.364 6.364 1.415-1.414-6.364-6.364 6.364-6.364z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </svg>
);

export default SvgX;
