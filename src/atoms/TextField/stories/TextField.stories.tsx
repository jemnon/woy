import React from 'react';
import { Meta } from '@storybook/react';
import TextField from '../TextField';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/TextField',
  component: TextField,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <TextField {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  placeholder: 'Email',
};
