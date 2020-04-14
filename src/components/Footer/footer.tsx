import React, { FC } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1.5rem 1rem;
  background-color: ${({ theme }): string => theme.colors.orange};
`;

const FooterCopyright = styled.p`
  color: ${({ theme }): string => theme.colors.cream};
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterCopyright>&copy; Whisper of Yum</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
