import React, { FC } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Search } from '../Icons';
import { ButtonReset } from '../Button';
import { ColorMode } from '../../types/theme';

interface SearchButtonProps {
  colorTheme?: ColorMode;
  fontSize?: string;
  onClick?: () => void;
}

const SearchButtonContainer = styled.button`
  ${ButtonReset};

  padding: ${({ theme }): string => theme.spacing.sm2};
  ${up('md')} {
    padding: ${({ theme }): string => theme.spacing.sm4};
  }

  cursor: pointer;
`;

const SearchButton: FC<SearchButtonProps> = ({
  colorTheme,
  fontSize = '1rem',
  onClick,
}) => (
  <SearchButtonContainer onClick={onClick}>
    <Search
      fontSize={fontSize}
      fill={colorTheme === 'dark' ? '#fff' : '#111'}
    />
  </SearchButtonContainer>
);

export default SearchButton;
