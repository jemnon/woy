import React, { FC, useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import Search from '@whisperofyum/search';
import IconMobile from '../../images/svg/icons/menu-offset.svg';
import Link from '../Link';
import Logo from '../../images/svg/logo-black-horizontal.svg';
import NavMobile from './nav-mobile';
import { NavSearchButton } from './nav-search';

const NavContainer = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }): string => theme.colors.white};
  z-index: ${({ theme }): string => theme.zIndex.z5};
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
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
  padding-left: ${({ theme }): string => theme.spacing.s4};
  padding-right: ${({ theme }): string => theme.spacing.s4};
  outline: none;
  border: none;
  cursor: pointer;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    display: none;
  }
  div {
    width: 1.5rem;
    > svg {
      width: 100%;
      height: 100%;
    }
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
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const handleMobileClick = (): void => {
    setIsMobileVisible(!isMobileVisible);
  };
  const handleSearchResultClick = (slug: string): void => {
    navigate(`/post/${slug}`);
  };
  const handleSearchButtonClick = (): void => {
    setIsSearchVisible(!isSearchVisible);
  };
  useEffect(() => {
    if (!isHeaderVisible) {
      setIsMobileVisible(false);
    } else if (isHeaderVisible && isMobileVisible) {
      setIsMobileVisible(true);
    }
  }, [isHeaderVisible]);
  useEffect(() => {
    if (!isHeaderVisible) {
      setIsSearchVisible(false);
    }
  }, [isHeaderVisible]);
  return (
    <>
      <NavContainer role="main">
        <Link to="/">
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Link>
        <NavContent>
          <NavList>
            <NavListItem>
              <Link activeClassName="is-active" to="/">
                Recipes
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
              <Link activeClassName="is-active" to="/partners">
                Partners
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
              <a href="mailto:whisperofyum@gmail.com" target="_top">
                Contact
              </a>
            </NavListItem>
          </NavList>
          <NavSearchButton
            isSearchVisible={isSearchVisible}
            onClick={handleSearchButtonClick}
          />
          <NavMobileButton onClick={handleMobileClick} type="button">
            <div>
              <IconMobile />
            </div>
          </NavMobileButton>
        </NavContent>
        {isSearchVisible && (
          <Search
            appId={process.env.GATSBY_ALGOLIA_APP_ID || ''}
            indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME || ''}
            searchKey={process.env.GATSBY_ALGOLIA_API_SEARCH_KEY || ''}
            onClick={handleSearchResultClick}
            onOutsideClick={(): void => {
              setIsSearchVisible(false);
            }}
          />
        )}
      </NavContainer>
      <NavMobile isVisible={isMobileVisible} onClick={handleMobileClick} />
    </>
  );
};

export default Nav;
