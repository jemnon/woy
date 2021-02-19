import React from 'react';
import { Meta } from '@storybook/react';
import SearchButton from '../SearchButton';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/SearchButton',
  component: SearchButton,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <SearchButton {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
