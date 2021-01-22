import * as React from 'react';

const SvgSearch = ({
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
      <path id="search_svg__a" d="M0 0h16.896v16.896H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="search_svg__b" fill="#fff">
        <use xlinkHref="#search_svg__a" />
      </mask>
      <path
        d="M3.461 10.532a5 5 0 117.071-7.07 5 5 0 11-7.071 7.071zm13.435 4.95l-4.299-4.3c2.05-2.739 1.838-6.647-.65-9.135-2.73-2.729-7.17-2.729-9.9 0a7.008 7.008 0 000 9.9c2.488 2.488 6.396 2.7 9.136.65l4.3 4.3 1.413-1.415z"
        fill="#000"
        mask="url(#search_svg__b)"
      />
    </g>
  </svg>
);

export default SvgSearch;
