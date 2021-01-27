import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { ButtonReset } from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import MobileButton from '../../atoms/MobileButton';
import SearchButton from '../../atoms/SearchButton';
import { ColorMode } from '../../types/theme';

interface NavProps {
  colorTheme?: ColorMode;
  pathname?: string;
  onClick?: (pathname: string) => {};
  onMobileClick?: () => {};
  onSearchClick?: () => {};
}

interface NavCTAProps {
  colorTheme?: ColorMode;
  isActive?: boolean;
}

const NavContainer = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
`;

const NavDivider = styled.div<NavCTAProps>`
  width: 0.125rem;
  height: 0.5625rem;

  margin-left: ${({ theme }): string => theme.spacing.sm4};
  margin-right: ${({ theme }): string => theme.spacing.sm4};

  background-color: ${({ colorTheme = 'light', theme }): string =>
    colorTheme === 'dark' ? theme.colors.white : theme.colors.nearBlack};
`;

const NavListDesktop = styled.ul`
  display: none;
  align-items: center;
  align-self: stretch;

  ${up('md')} {
    display: flex;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  align-self: stretch;

  ${up('md')} {
    display: none;
  }
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

const NavCTACSS = css<NavCTAProps>`
  display: flex;
  align-self: stretch;
  align-items: center;

  color: ${({ colorTheme = 'light', theme }): string =>
    colorTheme === 'dark' ? theme.colors.white : theme.colors.nearBlack};

  font-family: ${({ theme }): string => theme.fonts.lato};
  font-size: ${({ theme }): string => theme.fontSizes['f-xsm']};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;

  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-bottom-color: ${({ isActive = false, theme }): string =>
    isActive ? theme.colors.orange : 'transparent'};

  cursor: pointer;
`;

const NavButton = styled.button<NavCTAProps>`
  ${ButtonReset};
  ${NavCTACSS};

  transition: ${({ theme }): string => theme.transition};
`;

const NavLink = styled.a<NavCTAProps>`
  ${NavCTACSS};
`;

const Nav: FC<NavProps> = ({
  colorTheme = 'light',
  pathname,
  onClick,
  onMobileClick,
  onSearchClick,
}) => {
  const handleClick = (pathname: string): void => {
    if (onClick) onClick(pathname);
  };
  return (
    <NavContainer role="main">
      <Logo colorTheme={colorTheme} onClick={(): void => handleClick('/')} />
      <NavListDesktop>
        <NavListItem>
          <NavButton
            colorTheme={colorTheme}
            isActive={pathname === '/'}
            onClick={(): void => handleClick('/')}
          >
            Home
          </NavButton>
        </NavListItem>
        <NavListItem>
          <NavDivider colorTheme={colorTheme} />
        </NavListItem>
        <NavListItem>
          <NavButton
            colorTheme={colorTheme}
            isActive={pathname === '/recipes'}
            onClick={(): void => handleClick('/recipes')}
          >
            Recipes
          </NavButton>
        </NavListItem>
        <NavListItem>
          <NavDivider colorTheme={colorTheme} />
        </NavListItem>
        <NavListItem>
          <NavButton
            colorTheme={colorTheme}
            isActive={pathname === '/partners'}
            onClick={(): void => handleClick('/partners')}
          >
            Partners
          </NavButton>
        </NavListItem>
        <NavListItem>
          <NavDivider colorTheme={colorTheme} />
        </NavListItem>
        <NavListItem>
          <NavButton
            colorTheme={colorTheme}
            isActive={pathname === '/about'}
            onClick={(): void => handleClick('/about')}
          >
            About
          </NavButton>
        </NavListItem>
        <NavListItem>
          <NavDivider colorTheme={colorTheme} />
        </NavListItem>
        <NavListItem>
          <NavLink
            colorTheme={colorTheme}
            href="https://www.instagram.com/whisperofyum/?hl=en"
            target="_blank"
          >
            Instagram
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavDivider colorTheme={colorTheme} />
        </NavListItem>
        <NavListItem>
          <NavLink
            colorTheme={colorTheme}
            href="mailto:whisperofyum@gmail.com"
            target="_top"
          >
            Contact
          </NavLink>
        </NavListItem>
        <NavListItem>
          <SearchButton colorTheme={colorTheme} onClick={onSearchClick} />
        </NavListItem>
      </NavListDesktop>
      <NavList>
        <NavListItem>
          <SearchButton colorTheme={colorTheme} onClick={onSearchClick} />
        </NavListItem>
        <NavListItem>
          <MobileButton colorTheme={colorTheme} onClick={onMobileClick} />
        </NavListItem>
      </NavList>
    </NavContainer>
  );
};

export default Nav;
