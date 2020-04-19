import React, { FC } from 'react';
import styled from 'styled-components';
import Link from '../Link';
import BottomShape from '../../images/svg/bottom-shape.svg';
import LeftShape from '../../images/svg/left-shape.svg';
import RightShape from '../../images/svg/right-shape.svg';
import TopShape from '../../images/svg/top-shape.svg';

interface FooterSvgContainerProps {
  xPos?: string;
  yPos?: string;
}

const FooterContainer = styled.footer`
  position: relative;
  color: ${({ theme }): string => theme.colors.white};
  background-color: ${({ theme }): string => theme.colors.orange};
`;

const FooterContent = styled.section`
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
`;

const FooterCopyright = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

const FooterNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, auto));
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
  max-width: 30rem;
  font-size: 1.125rem;
`;

const FooterList = styled.ul`
  > li,
  a {
    color: ${({ theme }): string => theme.colors.white};
    font-weight: bold;
    text-decoration: none;
  }
`;

const FooterSvgContainer = styled.div<FooterSvgContainerProps>`
  position: absolute;
  top: ${({ yPos }): string => yPos || '0'};
  left: ${({ xPos }): string => xPos || '0'};
  transform: ${({ yPos, xPos }): string =>
    `translate3D(-${xPos || '0'}, -${yPos || '0'}, 0)`};
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterSvgContainer xPos="30%">
        <TopShape />
      </FooterSvgContainer>
      <FooterSvgContainer yPos="70%">
        <LeftShape />
      </FooterSvgContainer>
      <FooterSvgContainer xPos="100%" yPos="50%">
        <RightShape />
      </FooterSvgContainer>
      <FooterSvgContainer
        xPos="70%"
        yPos="100%"
        style={{ height: '18px', overflow: 'hidden' }}
      >
        <BottomShape />
      </FooterSvgContainer>
      <FooterContent>
        <FooterNav>
          <FooterList>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/whisperofyum/?hl=en"
                target="_blank"
              >
                Instagram
              </Link>
            </li>
          </FooterList>
          <FooterList>
            <li>Contact Us</li>
            <li>
              <a href="mailto:contact@whisperofyum.com" target="_top">
                contact@whisperofyum.com
              </a>
            </li>
          </FooterList>
        </FooterNav>
        <FooterCopyright>&copy; Whisper of Yum</FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
