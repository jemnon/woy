import React from 'react';
import { Meta } from '@storybook/react';
import Comments from '../Comments';

export default {
  title: 'Organisms/Comments',
  component: Comments,
} as Meta;

const Template = (args: any) => <Comments {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
