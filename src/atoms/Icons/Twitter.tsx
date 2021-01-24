import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 21 16"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path d="M21 1.89a8.81 8.81 0 01-2.47.64A4.11 4.11 0 0020.42.29a9 9 0 01-2.73 1A4.48 4.48 0 0014.54 0a4.18 4.18 0 00-4.31 4 3.57 3.57 0 00.12.92A12.53 12.53 0 011.47.74a3.82 3.82 0 00-.58 2A4 4 0 002.8 6.13a4.55 4.55 0 01-1.95-.51 4.1 4.1 0 003.46 4 4.35 4.35 0 01-1.14.15 4.28 4.28 0 01-.81-.08 4.28 4.28 0 004 2.81A9 9 0 011 14.24a8.77 8.77 0 01-1-.06A12.77 12.77 0 006.61 16 11.79 11.79 0 0018.86 4.5v-.52A8.38 8.38 0 0021 1.89z" />
  </svg>
);

const SvgTwitter = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgTwitter;
