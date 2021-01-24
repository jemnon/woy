import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16.9 16.9"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <mask
        id="search_svg__a"
        x={0}
        y={0}
        width={16.9}
        height={16.9}
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M.05.05h16.9v16.9H.05V.05z"
          transform="translate(-.05 -.05)"
        />
      </mask>
    </defs>
    <g mask="url(#search_svg__a)">
      <path
        d="M3.46 10.53a5 5 0 117.07 0 5 5 0 01-7.07 0zm13.49 4.95l-4.3-4.3a7 7 0 10-1.41 1.42l4.24 4.35z"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

const SvgSearch = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgSearch;
