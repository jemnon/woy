import React from 'react';
import { Meta } from '@storybook/react';
import PinButton from '../PinButton';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/PinButton',
  component: PinButton,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <PinButton {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
