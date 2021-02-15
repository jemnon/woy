import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '../Footer';

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

const Layout: FC<LayoutProps> = ({ bgColor = 'white', children }) => {
  return (
    <>
      <Main bgColor={bgColor} role="main">
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
