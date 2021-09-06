import React, { FC, ReactNode, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { up } from 'styled-breakpoints';
import { useLocation } from '@reach/router';
import theme from '../../theme';
import GlobalStyle from '../../atoms/GlobalStyle';
import Footer from '../Footer';
import MobileMenuContextProvider from '../../context/MobileMenuContextProvider';

interface LayoutProps {
  bgColor?: string;
  children: ReactNode;
}

interface MainProps {
  bgColor: string;
}

const Main = styled.main<MainProps>`
  background-color: ${({ theme }): string => theme.colors.white};
  color: ${({ theme }): string => theme.colors.nearBlack};
  font-family: ${({ theme }): string => theme.fonts.lato};
  @media ${({ theme }): string => theme.breakpoints.lg} {
    font-size: 1.125rem;
  }
  font-size: 1rem;
  min-height: 100vh;
`;

export const PageHeader = styled.header`
  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm4};
  ${up('sm')} {
    margin-bottom: ${({ theme: { spacing } }): string => spacing.md4};
  }
`;

const Layout: FC<LayoutProps> = ({ bgColor = 'white', children }) => {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <MobileMenuContextProvider>
        <GlobalStyle />
        <Main bgColor={bgColor} role="main">
          {children}
        </Main>
        {!location.pathname.includes('recipe-print') && <Footer />}
      </MobileMenuContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
