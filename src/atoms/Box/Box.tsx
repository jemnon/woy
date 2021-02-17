import styled from 'styled-components';
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

  width?: string;
  height?: string;
}

const Box = styled.div<BoxProps>`
  display: ${({ display = 'display' }): string => display};
  align-items: ${({ alignItems = 'center' }): string => alignItems};
  justify-content: ${({ justifyContent = 'center' }): string => justifyContent};

  padding: ${({ padding = 'sp-0', theme: { spacing } }): string =>
    spacing[padding]};
  width: ${({ width = '100px' }): string => width};
  height: ${({ height = '100px' }): string => height};

  background-color: ${({ bgColor = 'nearWhite', theme: { colors } }): string =>
    colors[bgColor]};
`;

export default Box;
