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
  overflow: hidden;
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
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 1rem;
  }
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
`;

const FooterNav = styled.nav`
  display: grid;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(50%, auto));
    font-size: 1.125rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
  grid-template-columns: repeat(auto-fit, minmax(100%, auto));
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  margin-bottom: 2rem;
  max-width: 30rem;
  font-size: 1rem;
`;

const FooterList = styled.ul`
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    margin-bottom: 0;
  }
  margin-bottom: 1.5rem;
  line-height: 1.75;

  > li,
  a {
    color: ${({ theme }): string => theme.colors.white};
    font-weight: bold;
    text-decoration: none;
    &[target='_top'] {
      padding-bottom: 0.25rem;
      border-bottom: 1px solid ${({ theme }): string => theme.colors.white};
    }
  }
`;

const FooterSvgContainer = styled.div<FooterSvgContainerProps>`
  position: absolute;
  top: ${({ yPos }): string => yPos || '0'};
  left: ${({ xPos }): string => xPos || '0'};
  transform: ${({ yPos, xPos }): string =>
    `translate3D(-${xPos || '0'}, -${yPos || '0'}, 0)`};
  .bottom-shape,
  .left-shape,
  .right-shape {
    @media ${({ theme }): string => theme.breakpoints.desktop} {
      display: block;
    }
    display: none;
  }
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterSvgContainer xPos="30%">
        <TopShape className="top-shape" />
      </FooterSvgContainer>
      <FooterSvgContainer yPos="70%">
        <LeftShape className="left-shape" />
      </FooterSvgContainer>
      <FooterSvgContainer xPos="100%" yPos="50%">
        <RightShape className="right-shape" />
      </FooterSvgContainer>
      <FooterSvgContainer
        xPos="70%"
        yPos="100%"
        style={{ height: '18px', overflow: 'hidden' }}
      >
        <BottomShape className="bottom-shape" />
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
