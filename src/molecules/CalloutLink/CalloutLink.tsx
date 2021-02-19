import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Colors } from '../../types/theme';
import { ButtonReset } from '../../atoms/Button';
import { RightArrow } from '../../atoms/Icons';

type ColorScheme = keyof Pick<Colors, 'orange' | 'nearBlack'>;

interface CalloutLinkProps {
  children: ReactNode;
  colorScheme?: ColorScheme;
  onClick?: () => void;
}

interface CalloutLinkContainerProps {
  colorScheme?: ColorScheme;
}

const CalloutLinkContainer = styled.button<CalloutLinkContainerProps>`
  ${ButtonReset};

  display: inline-flex;
  align-items: center;
  align-self: flex-end;

  cursor: pointer;

  font-family: ${({ theme }): string => theme.fonts.lato};
  font-size: ${({ theme }): string => theme.fontSizes['f-xsm']};
  ${up('sm')} {
    font-size: ${({ theme }): string => theme.fontSizes['f-sm']};
  }
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  color: ${({ colorScheme = 'orange', theme }): string =>
    theme.colors[colorScheme]};
`;

const CalloutLinkSpan = styled.span`
  padding-right: ${({ theme }): string => theme.spacing.sm1};
`;

const CalloutLink: FC<CalloutLinkProps> = ({
  children,
  colorScheme = 'orange',
  onClick,
}) => (
  <CalloutLinkContainer colorScheme={colorScheme} onClick={onClick}>
    <CalloutLinkSpan>{children}</CalloutLinkSpan>
    <RightArrow
      fontSize="10px"
      fill={colorScheme === 'nearBlack' ? '#2B2B2B' : '#A2421B'}
      style={{ marginTop: '1px' }}
    />
  </CalloutLinkContainer>
);

export default CalloutLink;
