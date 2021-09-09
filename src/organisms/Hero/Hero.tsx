import React, { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import DownButton from '../../atoms/DownButton';
import HeroContent from '../../molecules/HeroContent';

interface HeroProps {
  title?: string;
  onDownScroll?: () => void;
  onViewPost?: () => void;
  image?: ReactNode;
}

const HeroContainer = styled.section`
  position: relative;
  background-color: ${({ theme }): string => theme.colors.nearBlack};
  overflow: hidden;
  height: 85vh;
`;

const HeroImgWrapper = styled.div`
  position: relative;
  opacity: 0.4;
  height: 100%;
  z-index: ${({ theme }): string => theme.zIndex.z0};
  > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ image, title, onDownScroll, onViewPost }, heroRef) => {
    return (
      <HeroContainer ref={heroRef}>
        {title && <HeroContent isCentered title={title} onClick={onViewPost} />}
        {image && <HeroImgWrapper>{image}</HeroImgWrapper>}
        <DownButton isCentered onClick={onDownScroll} />
      </HeroContainer>
    );
  },
);

export default Hero;
