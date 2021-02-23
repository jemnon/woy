import React from 'react';
import { Meta } from '@storybook/react';
import PrintButton from '../PrintButton';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'FILL IN/PrintButton',
  component: PrintButton, 
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
  <PrintButton {...args} />
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};

