import React, { FC } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Images } from '../../types/images';
import logo from '../../images/svg/logo-white-horizontal.svg';

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

const HeroLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }): string => theme.zIndex.z1};
`;

const Hero: FC<HeroProps> = ({ images }) => {
  const [{ fluid }] = images || [];
  return (
    <HeroRoot id="hero">
      <HeroLogo src={logo} />
      <Img fluid={fluid} />
    </HeroRoot>
  );
};

export default Hero;
