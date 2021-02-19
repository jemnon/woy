import styled, { SimpleInterpolation } from 'styled-components';
import { Colors, Spacing } from '../../types/theme';

type BgColor = keyof Colors;
type Padding = keyof Spacing;
type Display = 'block' | 'inline-block' | 'inline' | 'inline-flex' | 'flex';

interface BoxProps {
  display?: Display;
  alignItems?: string;
  justifyContent?: string;

  bgColor?: BgColor;
  padding?: Padding;

  borderTop?: string;
  borderLeft?: string;
  borderBottom?: string;
  borderRight?: string;
  borderColor?: keyof Colors;

  width?: string;
  height?: string;
}

const Box = styled.div<BoxProps>`
  display: ${({ display = 'display' }): string => display};
  align-items: ${({ alignItems = 'center' }): string => alignItems};
  justify-content: ${({ justifyContent = 'center' }): string => justifyContent};

  padding: ${({ padding = 'sp-0', theme: { spacing } }): string =>
    spacing[padding]};
  width: ${({ width = '100%' }): string => width};
  height: ${({ height = '100%' }): string => height};

  background-color: ${({ bgColor = 'nearWhite', theme: { colors } }): string =>
    colors[bgColor]};

  ${({ borderTop }): SimpleInterpolation =>
    borderTop && `border-top: ${borderTop}`};
  ${({ borderLeft }): SimpleInterpolation =>
    borderLeft && `border-left: ${borderLeft}`};
  ${({ borderRight }): SimpleInterpolation =>
    borderRight && `border-right: ${borderRight}`};
  ${({ borderBottom }): SimpleInterpolation =>
    borderBottom && `border-left: ${borderBottom}`};
  ${({ borderColor, theme: { colors } }): SimpleInterpolation =>
    borderColor && `border-color: ${colors[borderColor]}`};
`;

export default Box;
