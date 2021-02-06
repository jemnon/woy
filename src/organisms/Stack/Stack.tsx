import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Spacing } from '../../types/theme';

type BottomSpacing = keyof Spacing;

interface StackProps {
  bottomSpacing?: BottomSpacing;
}

const Stack = styled.ul<StackProps>`
  display: flex;
  flex-direction: column;

  margin-bottom: ${({ theme: { spacing }, bottomSpacing }): string =>
    bottomSpacing ? spacing[bottomSpacing] : spacing.xlg4};
`;

export const StackItem = styled.li<StackProps>`
  margin-bottom: ${({ theme: { spacing }, bottomSpacing }): string =>
    bottomSpacing ? spacing[bottomSpacing] : spacing.sm4};
  ${up('lg')} {
    margin-bottom: ${({ theme: { spacing }, bottomSpacing }): string =>
      bottomSpacing ? spacing[bottomSpacing] : spacing.md4};
  }
`;

export default Stack;
