import React, { FC } from 'react';
import styled from 'styled-components';
import Link from '../Link';
import { HEADER_HEIGHT } from '../Header';

interface NavMobileProps {
  isVisible: boolean;
  onClick: () => void;
}

interface NavMobileContainerProps {
  isVisible: boolean;
  top: string;
}

const getPosition = (isVisible: boolean): string => {
  return `translate3D(0, ${isVisible ? '0' : '-100%'}, 0)`;
};

const NavMobileContainer = styled.nav<NavMobileContainerProps>`
  position: absolute;
  top: ${({ isVisible, top }): string => (isVisible ? top : '0')};
  left: 0;
  width: 100%;
  z-index: ${({ theme }): string => theme.zIndex.z4};
  background: ${({ theme }): string => theme.colors.white};
  border-bottom: 1px solid;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 3px 0px rgba(17, 17, 17, 0.19);
  transform: ${({ isVisible }): string => getPosition(isVisible)};
  transition: all 0.47s ease;
`;

const NavMobileListItem = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &.is-last {
    border-bottom: 0;
  }
  a {
    display: block;
    font-family: ${({ theme }): string => theme.fonts.latoBold};
    font-size: 0.875rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem;
    color: ${({ theme }): string => theme.colors.nearBlack};
    &.is-active {
      color: ${({ theme }): string => theme.colors.orange};
    }
  }
`;

const NavMobile: FC<NavMobileProps> = ({ isVisible, onClick }) => {
  return (
    <NavMobileContainer
      isVisible={isVisible}
      top={HEADER_HEIGHT}
      role="navigation"
    >
      <ul>
        <NavMobileListItem>
          <Link activeClassName="is-active" to="/" onClick={onClick}>
            Recipes
          </Link>
        </NavMobileListItem>
        <NavMobileListItem>
          <Link activeClassName="is-active" to="/partners">
            Partners
          </Link>
        </NavMobileListItem>
        <NavMobileListItem>
          <Link activeClassName="is-active" to="/about">
            About
          </Link>
        </NavMobileListItem>
        <NavMobileListItem>
          <Link
            to="https://www.instagram.com/whisperofyum/?hl=en"
            target="_blank"
          >
            Instagram
          </Link>
        </NavMobileListItem>
        <NavMobileListItem className="is-last">
          <a href="mailto:whisperofyum@gmail.com" target="_top">
            Contact
          </a>
        </NavMobileListItem>
      </ul>
    </NavMobileContainer>
  );
};

export default NavMobile;
