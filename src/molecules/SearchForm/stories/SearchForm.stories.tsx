import React from 'react';
import { Meta } from '@storybook/react';
import SearchForm from '../SearchForm';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/SearchForm',
  component: SearchForm,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <SearchForm {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
