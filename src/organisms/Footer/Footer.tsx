import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container';

const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  color: ${({ theme }): string => theme.colors.white};
  background-color: ${({ theme }): string => theme.colors.orange};
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

const Footer: FC = () => {
  return (
    <FooterContainer>
      <Container hasTopMargin={false}>
        <FooterCopyright>&copy; 2020 Whisper of Yum</FooterCopyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
