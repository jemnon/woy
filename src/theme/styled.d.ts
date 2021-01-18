import 'styled-components';
import {
  Breakpoints,
  Fonts,
  Colors,
  ColorMode,
  MaxWidths,
  Spacing,
  ZIndex,
} from './theme-types';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
    colors: Colors;
    colorMode?: ColorMode;
    fonts: Fonts;
    maxWidths: MaxWidths;
    spacing: Spacing;
    transition: string;
    zIndex: ZIndex;
  }
}
