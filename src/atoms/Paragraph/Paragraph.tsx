import styled, { css, SimpleInterpolation } from 'styled-components';
import { up } from 'styled-breakpoints';
import { FontSizes, Spacing } from '../../types/theme';

type BottomSpacing = keyof Spacing;
type FontStyle = 'normal' | 'italic';
type FontWeight = 'normal' | 'bold';
type FontSize = keyof FontSizes;
type TextAlign = 'left' | 'center' | 'right';

interface ParagraphProps {
  bottomSpacing?: BottomSpacing;
  fontStyle?: FontStyle;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  textAlign?: TextAlign;
}

export const ParagraphCSS = css<ParagraphProps>`
  font-family: ${({ theme }): string => theme.fonts.lato};
  font-weight: ${({ fontWeight = 'normal' }): string => fontWeight};
  font-style: ${({ fontStyle = 'normal' }): string => fontStyle};
  font-size: ${({ theme, fontSize = 'f1' }): string =>
    theme.fontSizes[fontSize]};
  ${up('sm')} {
    font-size: ${({ theme, fontSize = 'f2' }): string =>
      theme.fontSizes[fontSize]};
  }
  ${({ textAlign }): SimpleInterpolation =>
    textAlign && `text-align: ${textAlign}`};

  line-height: 1.5;

  margin-bottom: ${({ bottomSpacing, theme: { spacing } }): string =>
    bottomSpacing ? spacing[bottomSpacing] : spacing.sm4};

  &:last-child {
    margin-bottom: ${({ bottomSpacing, theme: { spacing } }): string =>
      bottomSpacing ? spacing[bottomSpacing] : '0'};
  }
`;

const Paragraph = styled.p<ParagraphProps>`
  ${ParagraphCSS};
`;

export default Paragraph;
