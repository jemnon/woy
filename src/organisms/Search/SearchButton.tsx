import React, { FC } from 'react';
import styled from 'styled-components';
import SearchIcon from './SearchIcon';

const SearchButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: button;

  border: none;
  padding: 0;
  background-color: ${({ theme: th }): string => th.colors.nearBlack};

  width: 3rem;

  outline: none;
  cursor: pointer;
`;

const SearchButton: FC = () => (
  <SearchButtonContainer type="submit">
    <SearchIcon />
  </SearchButtonContainer>
);

export default SearchButton;
