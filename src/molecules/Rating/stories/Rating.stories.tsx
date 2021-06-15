import React from 'react';
import { Meta } from '@storybook/react';
import Rating from '../Rating';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'FILL IN/Rating',
  component: Rating, 
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => (
  <Rating {...args} />
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};

