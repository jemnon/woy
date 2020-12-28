import React, { FC } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { HEADER_HEIGHT } from '../Header';
import IconSearch from '../../images/svg/icons/search.svg';
import IconX from '../../images/svg/icons/x.svg';

const NavSearchButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${({ theme }): string => theme.spacing.s2};
  padding-right: ${({ theme }): string => theme.spacing.s2};
 
  ${up('md')} {
    width: 58px;
    height: ${HEADER_HEIGHT};

    margin-left: ${({ theme }): string => theme.spacing.s4};
    padding-left: 0;
    padding-right: 0;

    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
  border: none;
  height: 100%;

  background-color: transparent;

  cursor: pointer;
  outline: none;

  /* div {
    width: 18px;
    height: 18px;
    margin-top: -3px;
    ${up('md')} {
      width: 21px;
      height: 21px;
      margin-top: 0;
    }
    > svg {
      width: 100%;
      height: 100%;
    }
  } */
`;

interface NavSearchButtonProps {
  isSearchVisible: boolean;
  onClick?: () => void;
}

const NavSearchButton: FC<NavSearchButtonProps> = ({
  isSearchVisible,
  onClick,
}) => (
  <NavSearchButtonContainer
    id="nav-search-button"
    type="button"
    onClick={onClick}
  >
    <div>{isSearchVisible ? <IconX /> : <IconSearch />}</div>
  </NavSearchButtonContainer>
);

export { NavSearchButton };
