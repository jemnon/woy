import styled from 'styled-components';
import { up } from 'styled-breakpoints';

const Stack = styled.ul`
  display: flex;
  flex-direction: column;

  margin-bottom: ${({ theme: { spacing } }): string => spacing.xlg4};
`;

export const StackItem = styled.li`
  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm4};
  ${up('md')} {
    margin-bottom: ${({ theme: { spacing } }): string => spacing.md4};
  }
`;

export default Stack;
