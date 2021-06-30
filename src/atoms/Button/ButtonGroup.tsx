import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import {
  generateResponsiveProps,
  CustomInterpolation,
  NonThemeProp,
  SpacingProp,
  ThemeObject,
} from '../../utils/utils';
import { BaseProps } from '../../types/base-props';

type Flow = 'row' | 'column';

export interface ButtonGroupProps extends BaseProps {
  children: ReactNode;
  flow?: Flow;
  sp?: SpacingProp;
  w?: NonThemeProp;
}

const ButtonGroupBase = styled.div<Pick<ButtonGroupProps, 'flow' | 'sp' | 'w'>>`
  display: flex;
  // TODO: figure out resonsive props for flow
  flex-direction: ${({ flow = 'row' }): string => flow};
  ${({ w = '100%' }): CustomInterpolation =>
    generateResponsiveProps<NonThemeProp>({
      cssProperty: 'width',
      prop: w,
    })};
  > * + * {
    ${({ flow = 'row', sp = 'md1', theme: { spacing } }): CustomInterpolation =>
      generateResponsiveProps<SpacingProp>({
        cssProperty: flow === 'row' ? 'margin-left' : 'margin-top',
        prop: sp,
        themeObject: spacing as ThemeObject,
      })}
  }
`;

const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  dataId,
  flow = 'row',
  id,
  sp = 'md1',
  w = 'auto',
}) => (
  <ButtonGroupBase data-id={dataId} flow={flow} id={id} sp={sp} w={w}>
    {children}
  </ButtonGroupBase>
);

export default ButtonGroup;
