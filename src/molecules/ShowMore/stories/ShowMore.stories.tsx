import React from 'react';
import { Meta } from '@storybook/react';
import ShowMore from '../ShowMore';

export default {
  title: 'Molecules/ShowMore',
  component: ShowMore,
} as Meta;

const Template = (args: any) => <ShowMore {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
