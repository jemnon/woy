import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      d="M9.71 12.47l-.71.71-.71-.71-4.95-4.94.71-.71 5 4.95L14 6.82l.71.71zM9 0a9 9 0 109 9 9 9 0 00-9-9z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgDownArrowFilled = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgDownArrowFilled;
