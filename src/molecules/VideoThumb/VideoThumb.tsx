import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import ImgWrapper from '../../atoms/ImgWrapper';
import PlayButton from '../../atoms/PlayButton';

interface VideoThumbProps {
  image: ReactNode;
  videoUrl?: string;
}

const VideoThumbContainer = styled.section`
  position: relative;
  width: 100%;

  background-color: ${({ theme: { colors } }): string => colors.nearBlack};
`;

const VideoThumbPlayButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme: { zIndex } }): string => zIndex.z1};
`;

const VideoThumbPlayer = styled.video`
  width: 100%;

  outline: 0;
  border: none;
`;

const VideoThumb: FC<VideoThumbProps> = ({ image, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const handleVideoClick = (): void => {
    setIsPlaying(true);
  };
  return (
    <VideoThumbContainer>
      <ImgWrapper ratio={16 / 9} style={{ opacity: '90%' }}>
        {isPlaying ? (
          <VideoThumbPlayer controls autoPlay>
            <source src={videoUrl} type="video/mp4" />
          </VideoThumbPlayer>
        ) : (
          <>{image}</>
        )}
      </ImgWrapper>
      {!isPlaying && (
        <VideoThumbPlayButtonWrapper>
          <PlayButton onClick={handleVideoClick} />
        </VideoThumbPlayButtonWrapper>
      )}
    </VideoThumbContainer>
  );
};

export default VideoThumb;
