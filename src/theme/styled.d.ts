import 'styled-components';
import {
  Breakpoints,
  Colors,
  ColorMode,
  FocusColors,
  Fonts,
  FontSizes,
  Header,
  HoverColors,
  MaxWidths,
  Spacing,
  ZIndex,
} from '../types/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
    colors: Colors;
    focusColors: FocusColors;
    fonts: Fonts;
    fontSizes: FontSizes;
    header: Header;
    hoverColors: HoverColors;
    maxWidths: MaxWidths;
    spacing: Spacing;
    transition: string;
    zIndex: ZIndex;
  }
}
