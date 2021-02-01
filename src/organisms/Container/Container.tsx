import styled from 'styled-components';
import { up } from 'styled-breakpoints';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: ${({ theme: { breakpoints } }): string => breakpoints.sm};

  padding: ${({ theme: { spacing } }): string => {
    return `${spacing.md4} ${spacing.sm4} ${spacing.xlg4}`;
  }};
  ${up('md')} {
    max-width: ${({ theme: { breakpoints } }): string => breakpoints.lg};
  }
  ${up('lg')} {
    padding-left: ${({ theme: { spacing } }): string => spacing.md4};
    padding-right: ${({ theme: { spacing } }): string => spacing.md4};
  }
`;

export default Container;
