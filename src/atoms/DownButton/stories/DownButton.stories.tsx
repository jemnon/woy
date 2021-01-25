import React from 'react';
import { Meta } from '@storybook/react';
import DownButton from '../DownButton';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/DownButton',
  component: DownButton,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <DownButton {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
// @ts-ignore
Default.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
