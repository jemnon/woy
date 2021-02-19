import React from 'react';
import { Meta } from '@storybook/react';
import Social from '../Social';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/Social',
  component: Social,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <Social {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
