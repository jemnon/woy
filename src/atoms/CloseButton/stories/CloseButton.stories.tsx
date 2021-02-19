import React from 'react';
import { Meta } from '@storybook/react';
import CloseButton from '../CloseButton';

export default {
  title: 'Atoms/CloseButton',
  component: CloseButton,
} as Meta;

const Template = (args: any) => <CloseButton {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
