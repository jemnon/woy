import React, { FC } from 'react';
import styled from 'styled-components';
import { Play } from '../Icons';
import { ButtonReset } from '../Button';
import { hexToRGBA } from '../../utils/colors';

interface PlayButtonProps {
  onClick?: () => void;
}

const PlayButtonContainer = styled.button`
  ${ButtonReset};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  transition: ${({ theme: { transition } }): string => transition};

  &:active {
    box-shadow: ${({ theme }): string =>
      `${theme.focusColors.blue} 0px 0px 0px 3px`};
  }
`;

const PlayButtonContent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;

  border-radius: 100%;

  background-color: ${({ theme: { colors } }): string => {
    return `${hexToRGBA(colors.nearBlack, 90)}`;
  }};
`;

const PlayButton: FC<PlayButtonProps> = ({ onClick }) => (
  <PlayButtonContainer onClick={onClick}>
    <PlayButtonContent>
      <Play fill="#fff" fontSize="1.5rem" style={{ marginLeft: '5px' }} />
    </PlayButtonContent>
  </PlayButtonContainer>
);

export default PlayButton;
