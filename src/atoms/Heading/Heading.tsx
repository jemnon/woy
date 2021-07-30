import React, { FC, ElementType, ReactNode } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
import {
  CustomInterpolation,
  generateResponsiveProps,
  FontSizeProp,
  NonThemeProp,
  ThemeObject,
} from '../../utils/utils';
import { ColorKeys } from '../../types/theme';

type Level = '1' | '2' | '3' | '4' | '5' | '6';
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

interface HeadingProps {
  alignment?: NonThemeProp;
  as?: ElementType;
  children: ReactNode;
  c?: ColorKeys;
  level?: Level;
  lh?: string;
  textSize?: FontSizeProp;
  transform?: TextTransform;
}

type LevelMap = {
  [key in Level]: FontSizeProp;
};

const levelMap: LevelMap = {
  '1': ['f10', 'f11', 'f13'],
  '2': ['f9', 'f10', 'f12'],
  '3': ['f8', 'f9', 'f11'],
  '4': ['f7', 'f8', 'f10'],
  '5': ['f6', 'f7', 'f9'],
  '6': ['f5', 'f6', 'f8'],
};

const HeadingBase = styled.div<Omit<HeadingProps, 'as' | 'children'>>`
  font-weight: 900;
  font-family: ${({ theme: { fonts } }): string => fonts.noto};
  color: ${({ c = 'nearBlack', theme: { colors } }): string => colors[c]};
  text-transform: ${({ transform = 'none' }): string => transform};
  margin-bottom: 0;
  ${({ lh }): SimpleInterpolation => lh && `line-height: ${lh}`};
  ${({ level, textSize = 'f1', theme: { fontSizes } }): CustomInterpolation =>
    generateResponsiveProps<FontSizeProp>({
      cssProperty: 'font-size',
      prop: level ? levelMap[level] : textSize,
      themeObject: fontSizes as ThemeObject,
    })};
  ${({ alignment = 'left' }): CustomInterpolation =>
    generateResponsiveProps<NonThemeProp>({
      cssProperty: 'text-align',
      prop: alignment,
    })};
`;

const Heading: FC<HeadingProps> = ({
  alignment = 'left',
  as = 'h1',
  children,
  c = 'nearBlack',
  level,
  lh,
  textSize = 'f1',
  transform = 'none',
}) => (
  <HeadingBase
    alignment={alignment}
    as={as}
    c={c}
    level={level}
    lh={lh}
    textSize={textSize}
    transform={transform}
  >
    {children}
  </HeadingBase>
);

export default Heading;
