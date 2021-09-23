import { Element } from 'hast';
import {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
  SimpleInterpolation,
} from 'styled-components';
import { up } from 'styled-breakpoints';
import breakpoints from '../theme/objects/breakpoints';
import {
  Breakpoints as BreakpointType,
  Spacing,
  SpacingKeys,
  FontSizeKeys,
  FontSizes,
} from '../types/theme';

export type SpacingProp = SpacingKeys | SpacingKeys[];
export type FontSizeProp = FontSizeKeys | FontSizeKeys[];
export type NonThemeProp =
  | string
  | number
  | number[]
  | null
  | null[]
  | string[]
  | (string | number | null)[];
export type CustomInterpolation =
  | FlattenInterpolation<ThemeProps<DefaultTheme>>
  | SimpleInterpolation
  | string;
export interface ThemeObject extends Spacing, FontSizes {}
export type CSSProperty =
  | 'grid-template-columns'
  | 'column-gap'
  | 'row-gap'
  | 'flex-direction'
  | 'font-size'
  | 'margin'
  | 'margin-bottom'
  | 'margin-left'
  | 'margin-right'
  | 'margin-top'
  | 'height'
  | 'max-width'
  | 'padding'
  | 'padding-bottom'
  | 'padding-left'
  | 'padding-right'
  | 'padding-top'
  | 'text-align'
  | 'width';
type BreakpointKeys = keyof BreakpointType;
type ThemeObjectKeys = keyof (Spacing & FontSizes);

interface BreakpointOptions {
  breakpointName: BreakpointKeys;
  cssProperty: CSSProperty;
  propValue: string;
}
type GenerateWithBreakpoints = (
  options: BreakpointOptions,
) => CustomInterpolation;

const parseForGridColumns = (
  cssProperty: CSSProperty,
  value: number | string,
): number | string => {
  if (cssProperty !== 'grid-template-columns') return value;
  return typeof value === 'number' ? `repeat(${value}, 1fr)` : value;
};
const generateWithBreakpoints: GenerateWithBreakpoints = ({
  breakpointName,
  propValue,
  cssProperty,
}) => {
  const cssRule =
    propValue &&
    `${cssProperty}: ${parseForGridColumns(cssProperty, propValue)}`;
  const cssObj = css`
    ${up(breakpointName)} {
      ${cssRule};
    }
  `;
  return cssObj;
};

interface ResponsivePropsOptions<T> {
  cssProperty: CSSProperty;
  prop: T;
  themeObject?: ThemeObject;
}
type GenerateResponsiveProps = <T extends unknown>(
  options: ResponsivePropsOptions<T>,
) => CustomInterpolation;

const getBreakpointName = (idx: number): BreakpointKeys =>
  Object.keys(breakpoints)[idx] as BreakpointKeys;

export const generateResponsiveProps: GenerateResponsiveProps = ({
  cssProperty,
  prop,
  themeObject,
}) => {
  if (Array.isArray(prop)) {
    // find first non null prop value to apply to lowest breakpoint below
    const firstValue = prop.find(val => val !== null);
    const responsiveCSS = prop.map((val, idx) => {
      // map to breakpoint name
      const breakpointName = getBreakpointName(idx);
      let propValue = '';
      // if the prop value is a mappable property within a theme object, and also grabs
      // the nearest non null value in the array
      if (themeObject)
        propValue =
          breakpointName === 'xxsm' && val === null
            ? themeObject[firstValue as ThemeObjectKeys]
            : themeObject[val as ThemeObjectKeys];
      // non mappable prop value, and also grabs the nearest non null value in the array
      if (!themeObject)
        propValue =
          breakpointName === 'xxsm' && val === null ? firstValue : val;
      // generates css per breakpoint
      return generateWithBreakpoints({
        breakpointName,
        propValue,
        cssProperty,
      });
    });
    return responsiveCSS;
  }
  // supports non mappable properties like width and height
  return themeObject && !Array.isArray(prop)
    ? `${cssProperty}: ${themeObject[prop as ThemeObjectKeys]}`
    : `${cssProperty}: ${parseForGridColumns(cssProperty, prop as string)}`;
};

export const isDomUsable = (): boolean => {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
};

export const generateFromAst = (
  element?: Element,
  name = 'ingredients',
  parentTagName = 'ul',
): string | string[] => {
  let parsedAst: string[] = [];
  const ast = element?.children.filter(
    child => child.tagName === parentTagName,
  );
  if (ast) {
    const mapped: any = ast.map((item: any) => {
      return item.children;
    });
    const filtered = mapped.flat().filter((item: any) => item.tagName === 'li');
    filtered.forEach((item: any) => {
      const [{ value }] = item.children;
      parsedAst.push(value);
    });
  }
  return name === 'ingredients' ? parsedAst : parsedAst.join('');
};

export default isDomUsable;
