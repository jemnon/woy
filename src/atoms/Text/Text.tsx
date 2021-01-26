import styled, { css } from 'styled-components';
import { Colors, Fonts, FontSizes } from '../../types/theme';

type Display = 'block' | 'inline' | 'inline-block';
type FontFamily = keyof Fonts;
type FontSize = keyof FontSizes;
type FontStyle = 'normal' | 'italic';
type FontWeight = 'normal' | 'bold';
type TextAlign = 'left' | 'right' | 'center';
type TextColor = keyof Colors;
type TextTransform = 'uppercase' | 'capitalize' | 'none';

interface TextProps {
  display?: Display;
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  textAlign?: TextAlign;
  textColor?: TextColor;
  textTransform?: TextTransform;
}

export const EllipsisCSS = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.div<TextProps>`
  display: ${({ display = 'block' }): string => display};

  font-family: ${({ theme, fontFamily = 'lato' }): string =>
    theme.fonts[fontFamily] as FontFamily};
  font-size: ${({ theme, fontSize = 'f1' }): string =>
    theme.fontSizes[fontSize]};
  font-style: ${({ fontStyle = 'normal' }): string => fontStyle};
  font-weight: ${({ fontWeight = 'normal' }): string => fontWeight};
  text-align: ${({ textAlign = 'left' }): string => textAlign};
  text-transform: ${({ textTransform = 'none' }): string => textTransform};

  line-height: 1.5;

  color: ${({ textColor = 'nearBlack', theme }): string =>
    theme.colors[textColor]};
`;

export default Text;
