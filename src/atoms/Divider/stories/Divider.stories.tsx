import React from 'react';
import { Meta } from '@storybook/react';
import Divider from '../Divider';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/Divider',
  component: Divider,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <Divider {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
