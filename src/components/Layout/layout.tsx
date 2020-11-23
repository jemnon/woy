import React, { FC, ReactNode } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '@whisperofyum/theme';
import Footer from '../Footer';

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
  h6 {
    margin: 0;
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
