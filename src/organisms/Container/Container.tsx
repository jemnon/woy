import styled from 'styled-components';
import { up } from 'styled-breakpoints';

interface ContainerProps {
  hasTopMargin?: boolean;
}

const Container = styled.div<ContainerProps>`
  margin-top: ${({ theme: { header }, hasTopMargin = true }): string =>
    hasTopMargin ? header.height : '0'};
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: ${({ theme: { maxWidths } }): string => maxWidths.sm};

  padding: ${({ theme: { spacing } }): string => {
    return `${spacing.md4} ${spacing.sm4} ${spacing.xlg4}`;
  }};
  padding-top: ${({ theme: { spacing } }): string => spacing.sm4};
  ${up('sm')} {
    padding-top: ${({ theme: { spacing } }): string => spacing.md4};
  }
  ${up('md')} {
    max-width: ${({ theme: { maxWidths } }): string => maxWidths.lg};
  }
  ${up('lg')} {
    padding-left: ${({ theme: { spacing } }): string => spacing.md4};
    padding-right: ${({ theme: { spacing } }): string => spacing.md4};
  }
`;

export default Container;
