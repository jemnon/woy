import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonReset } from '../Button';
import { X as Close } from '../Icons';
import { ColorMode } from '../../types/theme';

interface CloseButtonProps {
  colorTheme?: ColorMode;
  fontSize?: string;
  onClick?: () => void;
}

const CloseButtonContainer = styled.button`
  ${ButtonReset};
`;

const CloseButton: FC<CloseButtonProps> = ({
  colorTheme,
  fontSize = '1rem',
  onClick,
}) => (
  <CloseButtonContainer onClick={onClick} type="button">
    <Close fill={colorTheme === 'dark' ? '#fff' : '#111'} fontSize={fontSize} />
  </CloseButtonContainer>
);

export default CloseButton;
