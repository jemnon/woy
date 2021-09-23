import React, { FC, ReactNode, ElementType } from 'react';
import styled from 'styled-components';
import {
  generateResponsiveProps,
  CustomInterpolation,
  NonThemeProp,
  SpacingProp,
  ThemeObject,
} from '../../utils/utils';

export interface GridProps {
  as?: ElementType;
  dataId?: string;
  id?: string;
  children: ReactNode;
  columns?: NonThemeProp;
  columnGap?: SpacingProp;
  rowGap?: SpacingProp;
}

const BaseGrid = styled.section<
  Pick<GridProps, 'columnGap' | 'columns' | 'rowGap'>
>`
  display: grid;
  ${({ columns = 12 }): CustomInterpolation =>
    generateResponsiveProps<NonThemeProp>({
      cssProperty: 'grid-template-columns',
      prop: columns,
    })};
  ${({ columnGap = 'md1', theme: { spacing } }): CustomInterpolation =>
    generateResponsiveProps<SpacingProp>({
      cssProperty: 'column-gap',
      prop: columnGap,
      themeObject: spacing as ThemeObject,
    })};
  ${({ rowGap = 'md1', theme: { spacing } }): CustomInterpolation =>
    generateResponsiveProps<SpacingProp>({
      cssProperty: 'row-gap',
      prop: rowGap,
      themeObject: spacing as ThemeObject,
    })};
`;

const Grid: FC<GridProps> = ({
  as = 'div',
  children,
  columns = 12,
  columnGap = 'md1',
  rowGap = 'md1',
}) => (
  <BaseGrid as={as} columns={columns} columnGap={columnGap} rowGap={rowGap}>
    {children}
  </BaseGrid>
);

export default Grid;
