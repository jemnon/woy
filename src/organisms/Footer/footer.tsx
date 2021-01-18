import React, { FC } from 'react';
import styled from 'styled-components';
import EmailNewsletter from '../../molecules/EmailNewsletter';
import Link from '../../atoms/Link';

const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  color: ${({ theme }): string => theme.colors.white};
  background-color: ${({ theme }): string => theme.colors.darkOrange};
`;

const FooterContent = styled.section`
  display: grid;
  padding: 1rem;
  @media ${({ theme }): string => theme.breakpoints.lg} {
    padding: 4rem 1rem;
    max-width: 64rem;
    grid-template-areas:
      'nav newsletter'
      'copyright copyright';
    grid-template-columns: 50% auto;
  }
  grid-template-areas:
    'nav nav'
    'newsletter newsletter'
    'copyright copyright';
  grid-gap: 2rem;
  grid-template-columns: fit-content(100%);
  margin-left: auto;
  margin-right: auto;
  max-width: 30rem;
  padding: 2rem 1rem;
`;

const FooterCopyright = styled.p`
  grid-area: copyright;
  @media ${({ theme }): string => theme.breakpoints.lg} {
    font-size: 1rem;
  }
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
`;

const FooterNav = styled.nav`
  display: grid;
  grid-area: nav;
  @media ${({ theme }): string => theme.breakpoints.lg} {
    font-size: 1.125rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(33.33%, auto));
  }
  @media ${({ theme }): string => theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(33.33%, auto));
    justify-content: center;
  }
  grid-template-columns: repeat(auto-fit, minmax(50%, auto));
  font-size: 1rem;
`;

const FooterList = styled.ul`
  @media ${({ theme }): string => theme.breakpoints.lg} {
    &:first-child {
      margin-bottom: 0 !important;
    }
  }
  @media ${({ theme }): string => theme.breakpoints.md} {
    &:first-child {
      margin-bottom: 0 !important;
    }
  }
  &:first-child {
    margin-bottom: 1.5rem;
  }
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
  @media ${({ theme }): string => theme.breakpoints.lg} {
    font-size: 0.875rem;
  }
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterNav>
          <FooterList>
            <FooterTitle>Info</FooterTitle>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
        <FooterCopyright>&copy; 2020 Whisper of Yum</FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
