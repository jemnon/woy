import { ElementType, ReactNode } from 'react';
import { SpacingProp } from '../../utils/utils';
import { BaseProps } from '../../types/base-props';

type BasePropsType = Pick<BaseProps, 'dataId' | 'id'>;

interface StackProps extends BasePropsType {
  as?: ElementType;
  children: ReactNode;
  sp?: SpacingProp;
}

export default StackProps;
