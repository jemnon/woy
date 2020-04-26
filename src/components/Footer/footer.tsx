import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../container-styled';
import EmailNewsletter from '../EmailNewsletter';
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
  }
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
`;

const FooterNav = styled.nav`
  display: grid;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    font-size: 1.125rem;
    padding: 4rem 0;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(33.33%, auto));
    margin-left: auto;
    margin-right: auto;
  }
  @media ${({ theme }): string => theme.breakpoints.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(33.33%, auto));
    justify-content: center;
  }
  grid-template-columns: repeat(auto-fit, minmax(50%, auto));
  font-size: 1rem;
  max-width: 32rem;
  padding: 2rem 0;
  margin-left: -1rem;
  margin-right: -1rem;
`;

const FooterList = styled.ul`
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    margin-bottom: 0;
  }
  @media ${({ theme }): string => theme.breakpoints.tablet} {
    margin-bottom: 0;
  }
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1.5rem;
  li {
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
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
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }): string => theme.colors.white};
  letter-spacing: 0.1em;
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
        <EmailNewsletter />
        <FooterCopyright>&copy; Whisper of Yum</FooterCopyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
