import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 30.43"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path d="M32 11.63l-11.06-1.61L16 0l-4.94 10L0 11.63l8 7.8-1.89 11L16 25.22l9.89 5.2L24 19.43z" />
  </svg>
);

const SvgStarFull = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgStarFull;
