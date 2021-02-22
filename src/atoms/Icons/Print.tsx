import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 870.9 875"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path d="M667.7 169.9a103.12 103.12 0 00-30.1-72.7l-67.1-67.1A102.93 102.93 0 00497.7 0h-241a53.67 53.67 0 00-53.6 53.6v172.2h464.6v-55.9zM53.6 734.7h92.1V548.4h579.6v186.2h92a53.67 53.67 0 0053.6-53.6V341.8a53.67 53.67 0 00-53.6-53.6H53.6A53.67 53.67 0 000 341.8V681a53.56 53.56 0 0053.6 53.7zm84.8-373.2a56.3 56.3 0 11-56.3 56.3 56.29 56.29 0 0156.3-56.3zm533.2 486.8V602H199.1v246.2a26.93 26.93 0 0026.8 26.8h418.8a26.8 26.8 0 0026.9-26.7zM319.2 711.7h232.3a26.66 26.66 0 0126.5 22.8 24.66 24.66 0 01.3 3.9 26.74 26.74 0 01-26.8 26.8H319.2a26.74 26.74 0 01-26.8-26.8 25.61 25.61 0 01.3-3.9 26.75 26.75 0 0126.5-22.8z" />
  </svg>
);

const SvgPrint = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgPrint;
