import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { MaxWidths } from '../../types/theme';

type MaxWidth = keyof MaxWidths;

interface ContainerProps {
  hasTopMargin?: boolean;
  maxWidth?: MaxWidth;
}

const Container = styled.div<ContainerProps>`
  margin-top: ${({ theme: { header }, hasTopMargin = true }): string =>
    hasTopMargin ? header.height : '0'};
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: ${({ maxWidth, theme: { maxWidths } }): string =>
    maxWidths[maxWidth || 'sm'] ?? maxWidths.sm};

  padding: ${({ theme: { spacing } }): string => {
    return `${spacing.md4} ${spacing.sm4} ${spacing.xlg4}`;
  }};
  padding-top: ${({ theme: { spacing } }): string => spacing.sm4};
  ${up('sm')} {
    padding-top: ${({ theme: { spacing } }): string => spacing.md4};
  }
  ${up('md')} {
    max-width: ${({ maxWidth, theme: { maxWidths } }): string =>
      maxWidths[maxWidth ?? 'lg'] ?? maxWidths.lg};
  }
  ${up('xlg')} {
    padding-left: ${({ theme: { spacing } }): string => spacing.md4};
    padding-right: ${({ theme: { spacing } }): string => spacing.md4};

    max-width: ${({ maxWidth, theme: { maxWidths } }): string =>
      maxWidths[maxWidth ?? 'xlg'] ?? maxWidths.xlg};
  }
`;

export default Container;
