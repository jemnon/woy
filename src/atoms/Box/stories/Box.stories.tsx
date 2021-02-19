import React from 'react';
import { Meta } from '@storybook/react';
import Box from '../Box';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/Box',
  component: Box,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <Box {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
