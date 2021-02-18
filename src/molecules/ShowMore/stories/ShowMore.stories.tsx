import React from 'react';
import { Meta } from '@storybook/react';
import ShowMore from '../ShowMore';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'FILL IN/ShowMore',
  component: ShowMore, 
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
  <ShowMore {...args} />
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};

