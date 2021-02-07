import React from 'react';
import { Meta } from '@storybook/react';
import Scroller from '../Scroller';
export default {
  title: 'Organisms/Scroller',
  component: Scroller,
} as Meta;

const Template = (args: any) => <Scroller {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
