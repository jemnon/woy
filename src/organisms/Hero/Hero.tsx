import React, { forwardRef, ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import DownButton from '../../atoms/DownButton';
import HeroContent from '../../molecules/HeroContent';
import useWindowResize from '../../hooks/useWindowResize';

interface HeroProps {
  title?: string;
  onViewPost?: () => void;
  image?: ReactNode;
}

const HeroContainer = styled.section`
  position: relative;
  background-color: ${({ theme }): string => theme.colors.nearBlack};
  overflow: hidden;
  height: 100vh;
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
  ({ image, title, onViewPost }, heroRef) => {
    const initialHeight =
      typeof window !== 'undefined' ? window.innerHeight : 0;
    const [height, setHeight] = useState<number | string>(initialHeight);
    const handleResize = (
      width?: number | string,
      height?: number | string,
    ): void => {
      if (height) setHeight(height);
    };
    const handleDownScroll = (): void => {
      if (height && typeof height === 'number') {
        window.scrollBy({ top: height - 64, left: 0, behavior: 'smooth' });
      }
    };
    useWindowResize(handleResize);
    return (
      <HeroContainer ref={heroRef}>
        {title && <HeroContent isCentered title={title} onClick={onViewPost} />}
        {image && <HeroImgWrapper>{image}</HeroImgWrapper>}
        <DownButton isCentered onClick={handleDownScroll} />
      </HeroContainer>
    );
  },
);

export default Hero;
