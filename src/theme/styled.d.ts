import 'styled-components';
import {
  Breakpoints,
  Colors,
  ColorMode,
  Fonts,
  FontSizes,
  HoverColors,
  MaxWidths,
  Spacing,
  ZIndex,
} from '../types/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
    colors: Colors;
    fonts: Fonts;
    fontSizes: FontSizes;
    hoverColors: HoverColors;
    maxWidths: MaxWidths;
    spacing: Spacing;
    transition: string;
    zIndex: ZIndex;
  }
}
