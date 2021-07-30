import React from 'react';
import { Meta } from '@storybook/react';
import Heading from '../Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as Meta;

const Template = (args: any) => <Heading {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
