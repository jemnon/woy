import styled from 'styled-components';
import { up } from 'styled-breakpoints';

type Size = 'small' | 'medium';

export const SideContentAdContainer = styled.div<{ size?: Size }>`
  display: none;
  ${up('md')} {
    display: block;
  }
  margin: 4rem auto;
  width: ${({ size = 'medium' }): string =>
    size === 'medium' ? '300px' : '320px'};
  height: ${({ size = 'medium' }): string =>
    size === 'medium' ? '250px' : '50px'};

  background-color: ${({ theme: { colors } }): string => colors.nearWhite};
`;
