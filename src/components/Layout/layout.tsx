import React, { FC, ReactNode, useEffect, useState } from 'react';
import { globalHistory } from '@reach/router';
import styled, {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';
import Header from '../Header';
import Nav from '../Nav';

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
    orange: '#cf7651',
    white: '#ffffff',
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
    line-height: 2;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
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
  background-color: ${({ theme }): string => theme.colors.white};
  color: ${({ theme }): string => theme.colors.nearBlack};
  font-family: ${({ theme }): string => theme.fonts.lato};
  min-height: 100vh;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = globalHistory.location || {};
  const initialVisiblityState = pathname === '/' ? false : true;
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(
    initialVisiblityState,
  );
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('#hero')?.clientHeight || 0;
      const windowY = window.pageYOffset;
      const waypoint = heroHeight / 2;
      if (waypoint >= windowY) {
        setIsHeaderVisible(false);
      }
      if (waypoint <= windowY) {
        setIsHeaderVisible(true);
      }
    };
    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return (): void => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isHeaderVisible, pathname, setIsHeaderVisible]);
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
