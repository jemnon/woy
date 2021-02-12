import React, { FC } from 'react';
import styled from 'styled-components';
import { Play } from '../Icons';
import { hexToRGBA } from '../../utils/colors';

const PlayButtonContainer = styled.div`
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

const PlayButton: FC = () => (
  <PlayButtonContainer>
    <Play fill="#fff" fontSize="1.5rem" style={{ marginLeft: '5px' }} />
  </PlayButtonContainer>
);

export default PlayButton;
