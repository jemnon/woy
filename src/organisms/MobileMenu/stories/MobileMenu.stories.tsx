import React from 'react';
import { Meta } from '@storybook/react';
import MobileMenu from '../MobileMenu';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Organisms/MobileMenu',
  component: MobileMenu,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <MobileMenu {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  isVisible: true,
};
