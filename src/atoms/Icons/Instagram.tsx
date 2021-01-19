import * as React from 'react';

const SvgInstagram = ({
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
  <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.15 6.77h-1.39a4.92 4.92 0 11-9.52 0h-1.4v6.77c0 .34.28.62.63.62h11.07c.34 0 .62-.28.62-.62V6.77h-.01zm0-4.3a.62.62 0 00-.62-.63h-1.84a.62.62 0 00-.62.62v1.85c0 .34.28.62.62.62h1.85c.34 0 .62-.28.62-.62V2.46l-.01.01zM8 4.91a3.08 3.08 0 100 6.16 3.08 3.08 0 000-6.16zM14.15 16H1.85A1.85 1.85 0 010 14.15V1.85C0 .83.83 0 1.85 0h12.3C15.17 0 16 .83 16 1.85v12.3c0 1.02-.83 1.85-1.85 1.85z"
      fill={props.fill}
      fillRule="nonzero"
    />
  </svg>
);

export default SvgInstagram;
