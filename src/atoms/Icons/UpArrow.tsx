import * as React from 'react';

const SvgUpArrow = ({
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
  <svg width={17} height={11} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0 9.02l1.415 1.416 7.07-7.072 7.072 7.072L16.97 9.02 9.9 1.95 8.485.536z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </svg>
);

export default SvgUpArrow;
