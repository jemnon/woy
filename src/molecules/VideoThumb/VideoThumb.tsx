import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ButtonReset } from '../../atoms/Button';
import ImgWrapper from '../../atoms/ImgWrapper';
import PlayButton from '../../atoms/PlayButton';

interface VideoThumbProps {
  image: ReactNode;
  onClick?: () => void;
}

const VideoThumbContainer = styled.button`
  ${ButtonReset};
  cursor: pointer;

  position: relative;
  width: 100%;

  background-color: ${({ theme: { colors } }): string => colors.nearBlack};

  transition: ${({ theme: { transition } }): string => transition};

  &:active {
    box-shadow: ${({ theme }): string =>
      `${theme.focusColors.blue} 0px 0px 0px 3px`};
  }
`;

const VideoThumbPlayButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z1};

  transform: translate(-50%, -50%);
`;

const VideoThumb: FC<VideoThumbProps> = ({ image, onClick }) => (
  <VideoThumbContainer onClick={onClick}>
    <ImgWrapper ratio={16 / 9} style={{ opacity: '90%' }}>
      {image}
    </ImgWrapper>
    <VideoThumbPlayButtonWrapper>
      <PlayButton />
    </VideoThumbPlayButtonWrapper>
  </VideoThumbContainer>
);

export default VideoThumb;
