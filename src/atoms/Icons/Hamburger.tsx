import * as React from 'react';

const SvgHamburger = ({
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
  <svg width={24} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill={props.fill} fillRule="evenodd">
      <path d="M0 9h24V7.025H0zM0 16h24v-2H0zM0 2h24V0H0z" />
    </g>
  </svg>
);

export default SvgHamburger;
