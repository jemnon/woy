import styled, { css } from 'styled-components';
import { Colors, Fonts, FontSizes } from '../../types/theme';

type FontFamily = keyof Fonts;
type FontSize = keyof FontSizes;
type FontStyle = 'normal' | 'italic';
type FontWeight = 'normal' | 'bold';
type TextColor = keyof Colors;

interface TextProps {
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  textColor?: TextColor;
}

export const EllipsisCSS = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.div<TextProps>`
  font-family: ${({ theme, fontFamily = 'lato' }): string =>
    theme.fonts[fontFamily] as FontFamily};
  font-size: ${({ theme, fontSize = 'f1' }): string =>
    theme.fontSizes[fontSize]};
  font-style: ${({ fontStyle = 'normal' }): string => fontStyle};
  font-weight: ${({ fontWeight = 'normal' }): string => fontWeight};

  color: ${({ textColor = 'nearBlack', theme }): string =>
    theme.colors[textColor]};
`;

export default Text;
