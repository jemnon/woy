import styled from 'styled-components';
import { up } from 'styled-breakpoints';

interface ContainerProps {
  maxWidth?: string;
}

const Container = styled.main<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }): string => theme.spacing.s4};
  padding-bottom: ${({ theme }): string => theme.spacing.s8};
  width: 100%;
  max-width: ${({ theme }): string => theme.maxWidths.sm};
  ${up('md')} {
    max-width: ${({ maxWidth }): string => maxWidth || '90rem'};
    padding-top: ${({ theme }): string => theme.spacing.s8};
    padding-left: ${({ theme }): string => theme.spacing.s4};
    padding-right: ${({ theme }): string => theme.spacing.s4};
    padding-bottom: 4rem;
  }
`;

interface HRProps {
  marginBottom?: string;
  borderStyle?: string;
}

export const HR = styled.hr<HRProps>`
  border: none;
  border-top: 1px dotted ${({ theme }): string => theme.colors.orange};
  margin-top: 0;
  @media ${({ theme }): string => theme.breakpoints.desktop} {
    margin-bottom: ${({ marginBottom }): string =>
      marginBottom ? marginBottom : '2rem'};
  }
  margin-bottom: ${({ marginBottom }): string =>
    marginBottom ? marginBottom : '1rem'};
`;

export default Container;
