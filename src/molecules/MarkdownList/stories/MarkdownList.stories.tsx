import React from 'react';
import { Meta } from '@storybook/react';
import MarkdownList from '../MarkdownList';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/MarkdownList',
  component: MarkdownList,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <MarkdownList {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
