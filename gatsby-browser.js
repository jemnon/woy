import React from 'react';
import BreakpointContextProvider from './src/context/BreakpointContextProvider';
import { detect } from 'detect-browser';

const browser = detect();

export const onClientEntry = () => {
  if (browser.name === 'ie') {
    window.location = 'https://browsehappy.com/';
  }
};

export const wrapRootElement = ({ element }) => (
  <BreakpointContextProvider>{element}</BreakpointContextProvider>
);
