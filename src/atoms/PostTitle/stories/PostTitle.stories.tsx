import React from 'react';
import { Meta } from '@storybook/react';
import PostTitle from '../PostTitle';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/PostTitle',
  component: PostTitle,
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
  <PostTitle {...args}>Filipino Pork Adobo</PostTitle>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
