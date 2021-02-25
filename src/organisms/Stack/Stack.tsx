import styled, {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';
import { up } from 'styled-breakpoints';
import { Spacing } from '../../types/theme';

type Display = 'flex' | 'inline-flex';
type Flow = 'column' | 'row';
type JustifyContent = 'flex-start' | 'center';

interface StackProps {
  display?: Display;
  bottomSpacing?: keyof Spacing;
  flow?: Flow;
  justifyContent?: JustifyContent;
  rightSpacing?: keyof Spacing;
}

const getColumnCSS = (): FlattenSimpleInterpolation => {
  const cssObj = css<Omit<StackProps, 'display' | 'flow'>>`
    margin-bottom: ${({ theme: { spacing }, bottomSpacing }): string =>
      bottomSpacing ? spacing[bottomSpacing] : spacing.sm4};
    ${up('lg')} {
      margin-bottom: ${({ theme: { spacing }, bottomSpacing }): string =>
        bottomSpacing ? spacing[bottomSpacing] : spacing.md4};
    }
    &:last-child {
      margin-bottom: 0;
    }
  `;
  return cssObj as FlattenSimpleInterpolation;
};

const getRowCSS = (): FlattenSimpleInterpolation => {
  const cssObj = css<Omit<StackProps, 'display' | 'flow'>>`
    margin-right: ${({ theme: { spacing }, rightSpacing }): string =>
      rightSpacing ? spacing[rightSpacing] : spacing.sm4};
    ${up('lg')} {
      margin-right: ${({ theme: { spacing }, rightSpacing }): string =>
        rightSpacing ? spacing[rightSpacing] : spacing.md4};
    }
    &:last-child {
      margin-right: 0;
    }
  `;
  return cssObj as FlattenSimpleInterpolation;
};

const Stack = styled.ul<StackProps>`
  display: ${({ display = 'flex' }): string => display};
  flex-direction: ${({ flow = 'column' }): string => flow};
  ${({ justifyContent }): SimpleInterpolation =>
    justifyContent && `justify-content: ${justifyContent}`};

  margin-bottom: ${({ theme: { spacing }, bottomSpacing }): string =>
    bottomSpacing ? spacing[bottomSpacing] : spacing.xlg4};
`;

export const StackItem = styled.li<StackProps>`
  ${({ flow }): FlattenSimpleInterpolation =>
    flow === 'row' ? getRowCSS() : getColumnCSS()};
`;

export default Stack;
