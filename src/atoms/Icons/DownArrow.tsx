import * as React from 'react';

const SvgDownArrow = ({
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
      d="M1.414.536L0 1.95l7.072 7.07 1.414 1.416L16.97 1.95 15.556.536l-7.07 7.07z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </svg>
);

export default SvgDownArrow;
