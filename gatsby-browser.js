import React from 'react';
import { detect } from 'detect-browser';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './src/atoms/GlobalStyle';
import theme from './src/theme';
import BreakpointContextProvider from './src/context/BreakpointContextProvider';
import MobileMenuContextProvider from './src/context/MobileMenuContextProvider';

const browser = detect();

export const onClientEntry = () => {
  if (browser.name === 'ie') {
    window.location = 'https://browsehappy.com/';
  }
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BreakpointContextProvider>
      <MobileMenuContextProvider>{element}</MobileMenuContextProvider>
    </BreakpointContextProvider>
  </ThemeProvider>
);
