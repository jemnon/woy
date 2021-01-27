import React from 'react';
import { Meta } from '@storybook/react';
import MobileButton from '../MobileButton';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/MobileButton',
  component: MobileButton,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <MobileButton {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
