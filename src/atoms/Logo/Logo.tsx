import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonReset } from '../Button';
import { Logo as LogoIcon } from '../Icons';
import { ColorMode } from '../../types/theme';

interface LogoProps {
  colorTheme?: ColorMode;
  onClick?: () => void;
}

const LogoContainer = styled.button`
  ${ButtonReset};
  cursor: pointer;
`;

const Logo: FC<LogoProps> = ({ colorTheme, onClick }) => (
  <LogoContainer onClick={onClick}>
    <LogoIcon
      fontSize="187px"
      fill={colorTheme === 'dark' ? '#fff' : '#111'}
      height="1.5rem"
      style={{ transition: 'all 0.47s ease' }}
    />
  </LogoContainer>
);

export default Logo;
