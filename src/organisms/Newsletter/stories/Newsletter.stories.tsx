import React from 'react';
import { Meta } from '@storybook/react';
import Newsletter from '../Newsletter';

export default {
  title: 'Organisms/Newsletter',
  component: Newsletter,
} as Meta;

const Template = (args: any) => <Newsletter {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
