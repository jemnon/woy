import styled, { css, SimpleInterpolation } from 'styled-components';
import { Colors, Fonts, FontSizes, Spacing } from '../../types/theme';

type BottomSpacing = keyof Spacing;
type Display = 'block' | 'inline' | 'inline-block';
type FontFamily = keyof Fonts;
type FontSize = keyof FontSizes;
type FontStyle = 'normal' | 'italic';
type FontWeight = 'normal' | 'bold';
type TextAlign = 'left' | 'right' | 'center';
type TextColor = keyof Colors;
type TextDecoration = 'none' | 'underline';
type TextTransform = 'uppercase' | 'capitalize' | 'none';

interface TextProps {
  bottomSpacing?: BottomSpacing;
  display?: Display;
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  hasEllipsis?: boolean;
  letterSpacing?: string;
  textAlign?: TextAlign;
  textColor?: TextColor;
  textDecoration?: TextDecoration;
  textTransform?: TextTransform;
}

export const EllipsisCSS = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.div<TextProps>`
  display: ${({ display = 'block' }): string => display};

  margin-bottom: ${({ bottomSpacing = 'sp-0', theme: { spacing } }): string =>
    spacing[bottomSpacing]};

  font-family: ${({ theme, fontFamily = 'lato' }): string =>
    theme.fonts[fontFamily] as FontFamily};
  font-size: ${({ theme, fontSize = 'f1' }): string =>
    theme.fontSizes[fontSize]};
  font-style: ${({ fontStyle = 'normal' }): string => fontStyle};
  font-weight: ${({ fontWeight = 'normal' }): string =>
    `${fontWeight} !important`};
  text-align: ${({ textAlign = 'left' }): string => textAlign};
  text-decoration: ${({ textDecoration = 'none' }): string => textDecoration};
  text-transform: ${({ textTransform = 'none' }): string => textTransform};
  letter-spacing: ${({ letterSpacing = 'normal' }): string => letterSpacing};

  line-height: 1.5;

  color: ${({ textColor = 'nearBlack', theme }): string =>
    theme.colors[textColor]};

  ${({ hasEllipsis = false }): SimpleInterpolation =>
    hasEllipsis && `${EllipsisCSS}`};
`;

export default Text;
