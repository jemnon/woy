import React from 'react';
import { Meta } from '@storybook/react';
import Author from '../Author';

export default {
  title: 'Atoms/Author',
  component: Author,
} as Meta;

const Template = (args: any) => <Author {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
