import React, { FC, ReactNode } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  fonts: {
    latoBold:
      `"latobold", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    lato:
      `"latoregular", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    latoItalic:
      `"latoitalic", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    notoBold:
      `"noto_serif_tcbold", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    noto:
      `"noto_serif_tcregular", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }      
  html {
    line-height: 1.15;
  }
  body {
    color: #000;
    margin: 0;
    min-height: 100vh;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body.disable-scroll {
    overflow: hidden;
  }
  main {
    min-height: 75vh;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  figure {
    margin: 0;
  }
  ul {
    padding-left: 0;
    margin: 0;
    list-style: none;
  }
  sup {
    top: 0;
  }
  img {
    max-width: 100%;
    border-style: none;
  }
`;

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  font-family: ${({ theme }): string => theme.fonts.lato};
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
