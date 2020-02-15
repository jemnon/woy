import React, { FC, ReactNode, useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header, { HEADER_HEIGHT } from './header';
import Nav from './nav';

const theme = {
  breakpoints: {
    desktop: 'screen and (min-width: 960px)',
    tablet: 'screen and (min-width: 480px) and (max-width: 959px)',
    mobile: 'screen and (max-width: 479px)',
  },
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
  colors: {
    cream: '#f4ede6',
    darkTeal: '#162936',
    teal: '#244c53',
    lightBrown: '#d5a188',
    nearBlack: '#111',
    orange: '#cf7651',
  },
  zIndex: {
    z0: '0',
    z1: '1',
    z2: '2',
    z3: '3',
    z4: '4',
    z5: '5',
    z6: '6',
    z999: '999',
    z9999: '9999',
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
    font-family: latoregular, -apple-system, system-ui,
                "avenir next", avenir, "Helvetica Neue", helvetica, ubuntu, roboto,
                noto, 'Segoe UI', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body.disable-scroll {
    overflow: hidden;
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

interface MainProps {
  isHeaderVisible: boolean;
}

const Main = styled.main<MainProps>`
  background-color: ${({ theme }): string => theme.colors.cream};
  color: ${({ theme }): string => theme.colors.nearBlack};
  font-family: ${({ theme }): string => theme.fonts.lato};
  min-height: 100vh;
  padding-top: ${({ isHeaderVisible }) =>
    isHeaderVisible ? HEADER_HEIGHT : ''};
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header isVisible={isHeaderVisible}>
        <Nav />
      </Header>
      <Main isHeaderVisible={isHeaderVisible}>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
