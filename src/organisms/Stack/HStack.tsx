import React, { FC } from 'react';
import styled from 'styled-components';
import {
  generateResponsiveProps,
  CustomInterpolation,
  SpacingProp,
  ThemeObject,
} from '../../utils/utils';
import StackProps from './stack-types';

const BaseHStack = styled.div<Pick<StackProps, 'sp'>>`
  display: flex;
  flex-direction: row;
  > * + * {
    ${({ sp = 'md1', theme: { spacing } }): CustomInterpolation =>
      generateResponsiveProps<SpacingProp>({
        cssProperty: 'margin-left',
        prop: sp,
        themeObject: spacing as ThemeObject,
      })}
  }
`;

const HStack: FC<StackProps> = ({
  as = 'div',
  dataId,
  id,
  children,
  sp = 'md1',
}) => (
  <BaseHStack as={as} data-id={dataId} id={id} sp={sp}>
    {children}
  </BaseHStack>
);

export default HStack;
