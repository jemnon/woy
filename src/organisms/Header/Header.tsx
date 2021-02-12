import React, { FC } from 'react';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { up } from 'styled-breakpoints';
import Nav from '../Nav';
import { ColorMode } from '../../types/theme';

interface HeaderProps {
  colorTheme?: ColorMode;
  pathname?: string;
  isFixed?: boolean;
}

const FixedCSS = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  transform: translate3d(0, 0, 0);
`;

const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  align-items: center;

  width: 100%;
  height: ${({ theme: { header } }): string => header.height};

  padding-left: ${({ theme }): string => theme.spacing.sm4};
  padding-right: ${({ theme }): string => theme.spacing.sm2};
  ${up('md')} {
    padding-right: 0;
  }

  border-bottom-width: ${({ colorTheme = 'light' }): string =>
    colorTheme === 'light' ? '1px' : '0'};
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.1);

  background-color: ${({ colorTheme = 'light', theme }): string =>
    colorTheme === 'dark' ? 'transparent' : theme.colors.white};

  transition: ${({ theme }): string => theme.transition};

  ${({ isFixed = true }): SimpleInterpolation => isFixed && `${FixedCSS}`};
`;

const Header: FC<HeaderProps> = ({ colorTheme, isFixed, pathname }) => (
  <HeaderContainer colorTheme={colorTheme} isFixed={isFixed}>
    <Nav colorTheme={colorTheme} pathname={pathname} />
  </HeaderContainer>
);

export default Header;
