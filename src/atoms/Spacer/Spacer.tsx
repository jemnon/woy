import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import {
  generateResponsiveProps,
  CustomInterpolation,
  SpacingProp,
  ThemeObject,
} from '../../utils/utils';
import { SpacingKeys } from '../../types/theme';

type Direction = 'horizontal' | 'vertical';
type Spacing = NonNullable<SpacingKeys>;

interface SpacerProps {
  dataId?: string;
  $direction?: Direction;
  id?: string;
  sp?: SpacingProp;
}

const BaseSpacer = styled.div<SpacerProps>`
  width: 100%;
  height: 100%;
  ${({ $direction = 'horizontal', sp = 'md1', theme: { spacing } }): string => {
    if ($direction === 'vertical')
      return `min-height: ${spacing[sp as Spacing]};`;
    return `min-width: ${spacing[sp as Spacing]};`;
  }}
  ${({
    sp = 'md1',
    $direction = 'horizontal',
    theme: { spacing },
  }): CustomInterpolation => {
    if ($direction === 'vertical') {
      return generateResponsiveProps<SpacingProp>({
        cssProperty: 'width',
        prop: sp,
        themeObject: spacing as ThemeObject,
      });
    }
    return generateResponsiveProps<SpacingProp>({
      cssProperty: 'height',
      prop: sp,
      themeObject: spacing as ThemeObject,
    });
  }};
`;

const Spacer: FC<SpacerProps> = ({
  dataId,
  $direction = 'horizontal',
  id,
  sp = 'sm4',
}) => <BaseSpacer data-id={dataId} $direction={$direction} id={id} sp={sp} />;

export default Spacer;
