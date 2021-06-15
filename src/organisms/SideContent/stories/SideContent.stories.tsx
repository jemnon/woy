import React from 'react';
import { Meta } from '@storybook/react';
import SideContent from '../SideContent';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Organisms/SideContent',
  component: SideContent,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <SideContent {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
