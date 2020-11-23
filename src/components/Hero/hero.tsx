import React, { FC, forwardRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Images } from '../../types/images';
import Logo from '../../images/svg/logo-white-horizontal.svg';

interface HeroProps {
  images?: Images[];
}

const HeroRoot = styled.div`
  position: relative;
  background-color: #000;
  height: 100vh;
  > div {
    opacity: 0.4;
    object-fit: cover;
    height: 100%;
  }
`;

const HeroLogo = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }): string => theme.zIndex.z1};
`;

const Hero = forwardRef<HTMLDivElement, HeroProps>((props, ref) => {
  const [{ fluid }] = props.images || [];
  return (
    <HeroRoot ref={ref} id="hero">
      <HeroLogo>
        <Logo />
      </HeroLogo>
      <Img fluid={fluid} />
    </HeroRoot>
  );
});

export default Hero;
