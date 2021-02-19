import * as React from 'react';
import styled from 'styled-components';

const SVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 9 17"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path d="M6.19 3.19H9V0H6.19a3.84 3.84 0 00-3.94 3.72v1.59H0V8.5h2.25V17h3.37V8.5h2.82L9 5.31H5.62V3.72a.56.56 0 01.57-.53z" />
  </svg>
);

const SvgFacebook = styled(SVG)`
  display: ${({ display = 'inline-block' }) => display};
  font-size: ${({ fontSize = '32px' }) => fontSize};
  color: ${({ color = '#111' }) => color};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgFacebook;
