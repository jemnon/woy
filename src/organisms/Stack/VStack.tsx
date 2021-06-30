import React, { FC } from 'react';
import styled from 'styled-components';
import {
  generateResponsiveProps,
  CustomInterpolation,
  SpacingProp,
  ThemeObject,
} from '../../utils/utils';
import StackProps from './stack-types';

const BaseVStack = styled.div<Pick<StackProps, 'sp'>>`
  display: flex;
  flex-direction: column;
  > * + * {
    ${({ sp = 'md1', theme: { spacing } }): CustomInterpolation =>
      generateResponsiveProps<SpacingProp>({
        cssProperty: 'margin-top',
        prop: sp,
        themeObject: spacing as ThemeObject,
      })}
  }
`;

const VStack: FC<StackProps> = ({
  as = 'div',
  dataId,
  id,
  children,
  sp = 'md1',
}) => (
  <BaseVStack as={as} data-id={dataId} id={id} sp={sp}>
    {children}
  </BaseVStack>
);

export default VStack;
