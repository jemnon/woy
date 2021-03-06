import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 9.9 16.97"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.48 0L1.41 7.07 0 8.48l8.48 8.49 1.42-1.41-7.07-7.08L9.9 1.41 8.48 0z"
    />
  </svg>
);

const SvgLeftArrow = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgLeftArrow;
