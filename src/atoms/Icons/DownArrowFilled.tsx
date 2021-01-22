import * as React from 'react';

const SvgDownArrowFilled = ({
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
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill={fill}
    preserveAspectRatio="xMidYMid meet"
    style={style}
    {...props}
  >
    <defs>
      <path id="down-arrow-filled_svg__a" d="M0 0h18v18H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="down-arrow-filled_svg__b" fill="#fff">
        <use xlinkHref="#down-arrow-filled_svg__a" />
      </mask>
      <path
        d="M9.707 12.475L9 13.182l-.707-.707-4.95-4.95.707-.707L9 11.768l4.95-4.95.707.708-4.95 4.949zM9-.002a9 9 0 100 18A9 9 0 009 0z"
        fill="#000"
        mask="url(#down-arrow-filled_svg__b)"
      />
    </g>
  </svg>
);

export default SvgDownArrowFilled;
