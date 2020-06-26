import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';

export const HEADER_HEIGHT: string = '64px';

interface HeaderProps {
  children: ReactNode;
  isVisible: boolean;
}

interface HeaderRootProps {
  isVisible: boolean;
}

const getPosition = (isVisible: boolean): string => {
  return `translate3D(0, ${isVisible ? '0' : '-100%'}, 0)`;
};

const HeaderRoot = styled.header<HeaderRootProps>`
  position: fixed;
  width: 100%;
  height: ${HEADER_HEIGHT};
  z-index: ${({ theme }): string => theme.zIndex.z5};
  transform: ${({ isVisible }): string => getPosition(isVisible)};
  transition: ${({ theme }): string => theme.transition};
`;

const Header: FC<HeaderProps> = ({ children, isVisible = false }) => {
  return <HeaderRoot isVisible={isVisible}>{children}</HeaderRoot>;
};

export default Header;
