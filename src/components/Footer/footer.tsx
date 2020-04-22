import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../container-styled';
import Link from '../Link';

const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  color: ${({ theme }): string => theme.colors.white};
  background-color: ${({ theme }): string => theme.colors.orange};
`;

const FooterCopyright = styled.p`
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 1rem;
    text-align: right;
  }
  @media ${({ theme }): string => theme.breakpoints.tablet} {
    text-align: right;
  }
  font-size: 0.875rem;
  font-weight: bold;
`;

const FooterNav = styled.nav`
  display: grid;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 1.125rem;
    padding: 4rem 0;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(33.33%, auto));
  }
  @media ${({ theme }): string => theme.breakpoints.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(33.33%, auto));
    justify-content: center;
  }
  font-size: 1rem;
  max-width: 36rem;
  padding: 2rem 0;
`;

const FooterList = styled.ul`
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    margin-bottom: 0;
  }
  @media ${({ theme }): string => theme.breakpoints.tablet} {
    margin-bottom: 0;
  }
  margin-bottom: 1.5rem;
  li {
    margin-bottom: 0.25rem;
  }
  a {
    color: ${({ theme }): string => theme.colors.white};
    font-weight: bold;
    text-decoration: none;
  }
`;

const FooterTitle = styled.li`
  position: relative;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 0.75rem;
  }
  font-size: 0.875rem;
  text-transform: uppercase;
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <Container bottomSpacing="1.5rem" topSpacing="1.5rem">
        <FooterNav>
          <FooterList>
            <FooterTitle>Info</FooterTitle>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <a href="mailto:jerimobley914@gmail.com" target="_top">
                Contact
              </a>
            </li>
          </FooterList>
          <FooterList>
            <FooterTitle>Follow</FooterTitle>
            <li>
              <Link
                to="https://www.instagram.com/whisperofyum/?hl=en"
                target="_blank"
              >
                Instagram
              </Link>
            </li>
          </FooterList>
          <FooterList style={{ marginBottom: 0 }}>
            <FooterTitle>Built With</FooterTitle>
            <li>
              <Link to="https://www.gatsbyjs.org/" target="_blank">
                Gatsbyjs
              </Link>
            </li>
            <li>
              <Link to="https://www.contentful.com/" target="_blank">
                Contentful
              </Link>
            </li>
          </FooterList>
        </FooterNav>
        <FooterCopyright>&copy; Whisper of Yum</FooterCopyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
