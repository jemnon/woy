import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 8"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path d="M7.09 0H0l8 8 8-8z" fillRule="evenodd" />
  </svg>
);

const SvgTriangleDown = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgTriangleDown;
