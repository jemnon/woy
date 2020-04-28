import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import IconMobile from '../../images/svg/icons/menu-offset.svg';
import Link from '../Link';
import Logo from '../../images/svg/logo-black-horizontal.svg';
import NavMobile from './nav-mobile';

const NavRoot = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }): string => theme.colors.white};
  z-index: ${({ theme }): string => theme.zIndex.z5};
`;

const NavList = styled.ul`
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    display: flex;
  }
  display: none;
  align-items: center;
  align-self: stretch;
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  > a {
    display: flex;
    align-self: stretch;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }): string => theme.colors.nearBlack};
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    &.is-active {
      border-bottom-color: ${({ theme }): string => theme.colors.orange};
    }
  }
`;

const NavListDivider = styled.div`
  background-color: ${({ theme }): string => theme.colors.nearBlack};
  width: 0.125rem;
  height: 0.5625rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const NavMobileButton = styled.button`
  background-color: transparent;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;
  width: 1.5rem;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    display: none;
  }
  > svg {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  max-width: 11.75rem;
`;

interface NavProps {
  isHeaderVisible?: boolean;
}

const Nav: FC<NavProps> = ({ isHeaderVisible }) => {
  const [isMobileVisible, setIsMobileVisible] = useState<boolean>(false);
  const handleMobileClick = (): void => {
    setIsMobileVisible(!isMobileVisible);
  };
  useEffect(() => {
    if (!isHeaderVisible) {
      setIsMobileVisible(false);
    } else if (isHeaderVisible && isMobileVisible) {
      setIsMobileVisible(true);
    }
  }, [isHeaderVisible]);
  return (
    <>
      <NavRoot role="main">
        <Link to="/">
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Link>
        <NavList>
          <NavListItem>
            <Link activeClassName="is-active" to="/">
              Blog
            </Link>
          </NavListItem>
          <NavListItem>
            <NavListDivider />
          </NavListItem>
          <NavListItem>
            <Link activeClassName="is-active" to="/about">
              About
            </Link>
          </NavListItem>
          <NavListItem>
            <NavListDivider />
          </NavListItem>
          <NavListItem>
            <Link
              to="https://www.instagram.com/whisperofyum/?hl=en"
              target="_blank"
            >
              Instagram
            </Link>
          </NavListItem>
          <NavListItem>
            <NavListDivider />
          </NavListItem>
          <NavListItem>
            <a href="mailto:jerimobley914@gmail.com" target="_top">
              Contact
            </a>
          </NavListItem>
        </NavList>
        <NavMobileButton onClick={handleMobileClick} type="button">
          <IconMobile />
        </NavMobileButton>
      </NavRoot>
      <NavMobile isVisible={isMobileVisible} onClick={handleMobileClick} />
    </>
  );
};

export default Nav;
