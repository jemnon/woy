import React, { FC, ReactNode } from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';
import Footer from '../Footer';

const theme: DefaultTheme = {
  breakpoints: {
    desktop: 'screen and (min-width: 960px)',
    tablet: 'screen and (min-width: 480px) and (max-width: 959px)',
    mobile: 'screen and (max-width: 479px)',
  },
  fonts: {
    latoBold:
      `"Lato Bold", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    lato:
      `"Lato", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    latoItalic:
      `"Lato Italic", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    noto:
      `"Noto Serif TC", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
  },
  colors: {
    cream: '#f4ede6',
    darkTeal: '#162936',
    teal: '#244c53',
    lightBrown: '#d5a188',
    nearBlack: '#111',
    nearWhite: '#efeee9',
    orange: '#cf7651',
    white: '#ffffff',
    red: '#ff4136',
    green: '#19a974',
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
  transition: 'all 0.47s ease',
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }      
  html {
    line-height: 1.5;
  }
  body {
    margin: 0;
    padding: 0;
    font-family:  "Lato", -apple-system, system-ui,
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
    margin-bottom: 1rem;
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
  bgColor?: string;
  children: ReactNode;
}

interface MainProps {
  bgColor: string;
  isHeaderVisible: boolean;
}

const Main = styled.main<MainProps>`
  background-color: ${({ bgColor, theme }): string => theme.colors[bgColor]};
  color: ${({ theme }): string => theme.colors.nearBlack};
  font-family: ${({ theme }): string => theme.fonts.lato};
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 1.125rem;
  }
  font-size: 1rem;
  min-height: 100vh;
`;

const Layout: FC<LayoutProps> = ({ bgColor = 'white', children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main bgColor={bgColor} isHeaderVisible={false} role="main">
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
