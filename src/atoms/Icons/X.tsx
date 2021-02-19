import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 15.56 15.56"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M14.14 0L7.78 6.36 1.42 0 0 1.42l6.36 6.36L0 14.14l1.42 1.42 6.36-6.37 6.36 6.37 1.42-1.42-6.37-6.36 6.37-6.36L14.14 0z"
    />
  </svg>
);

const SvgX = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgX;
