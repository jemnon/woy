import * as React from 'react';

const SvgFacebook = ({
  fill = '#000',
  width = 'auto',
  height = '100%',
  viewBox = '0 0 32 32',
  style = {
    width: '32px',
    height: '32px',
  },
  ...props
}) => (
  <svg width={9} height={17} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.188 3.188H9V0H6.187C4.018 0 2.25 1.668 2.25 3.719v1.594H0V8.5h2.25V17h3.375V8.5h2.813L9 5.312H5.625V3.72c0-.288.258-.531.563-.531z"
      fill="#111"
      fillRule="nonzero"
    />
  </svg>
);

export default SvgFacebook;
