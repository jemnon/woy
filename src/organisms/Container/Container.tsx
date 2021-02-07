import styled from 'styled-components';
import { up } from 'styled-breakpoints';

interface ContainerProps {
  isHome?: boolean;
}

const Container = styled.div<ContainerProps>`
  margin-top: ${({ theme: { header }, isHome }): string =>
    isHome ? '0' : header.height};
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: ${({ theme: { maxWidths } }): string => maxWidths.sm};

  padding: ${({ theme: { spacing } }): string => {
    return `${spacing.md4} ${spacing.sm4} ${spacing.xlg4}`;
  }};
  ${up('md')} {
    max-width: ${({ theme: { maxWidths } }): string => maxWidths.lg};
  }
  ${up('lg')} {
    padding-left: ${({ theme: { spacing } }): string => spacing.md4};
    padding-right: ${({ theme: { spacing } }): string => spacing.md4};
  }
`;

export default Container;
