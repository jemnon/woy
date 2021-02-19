import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path d="M14.15 6.77h-1.39a4.92 4.92 0 11-9.52 0h-1.4v6.77a.63.63 0 00.63.62h11.07a.62.62 0 00.62-.62V6.77zm0-4.3A.59.59 0 0014 2a.6.6 0 00-.44-.19h-1.87a.62.62 0 00-.62.62v1.88a.62.62 0 00.62.62h1.85a.62.62 0 00.62-.62V2.46zM8 4.91A3.08 3.08 0 1011.08 8 3.08 3.08 0 008 4.91zM14.15 16H1.85A1.85 1.85 0 010 14.15V1.85A1.85 1.85 0 011.85 0h12.3A1.85 1.85 0 0116 1.85v12.3A1.85 1.85 0 0114.15 16z" />
  </svg>
);

const SvgInstagram = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgInstagram;
