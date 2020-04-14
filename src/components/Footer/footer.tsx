import React, { FC } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  color: ${({ theme }): string => theme.colors.lightBrown};
  background-color: ${({ theme }): string => theme.colors.nearBlack};
`;

const FooterCopyright = styled.p`
  color: ${({ theme }): string => theme.colors.lightBrown};
  font-size: 0.875rem;
  font-weight: bold;
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterCopyright>&copy; Whisper of Yum</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
