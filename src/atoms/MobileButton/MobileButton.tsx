import React, { FC } from 'react';
import styled from 'styled-components';
import { Hamburger } from '../Icons';
import { ButtonReset } from '../Button';
import { ColorMode } from '../../types/theme';

interface MobileButtonProps {
  colorTheme?: ColorMode;
  fontSize?: string;
  onClick?: () => void;
}

const MobileButtonContainer = styled.button`
  ${ButtonReset};

  padding: ${({ theme }): string => theme.spacing.sm2};

  cursor: pointer;
`;

const MobileButton: FC<MobileButtonProps> = ({
  colorTheme,
  fontSize = '1.5rem',
  onClick,
}) => (
  <MobileButtonContainer onClick={onClick}>
    <Hamburger
      fontSize={fontSize}
      fill={colorTheme === 'dark' ? '#fff' : '#111'}
    />
  </MobileButtonContainer>
);

export default MobileButton;
