import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 16"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0 9h24V7.03H0V9zM0 16h24v-2H0v2zM0 2h24V0H0v2z"
    />
  </svg>
);

const SvgHamburger = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgHamburger;
