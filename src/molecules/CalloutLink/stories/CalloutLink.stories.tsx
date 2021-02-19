import React from 'react';
import { Meta } from '@storybook/react';
import CalloutLink from '../CalloutLink';

export default {
  title: 'Molecules/CalloutLink',
  component: CalloutLink,
} as Meta;

const Template = (args: any) => (
  <CalloutLink {...args}>Callout Link</CalloutLink>
);

export const Orange = Template.bind({});
// @ts-ignore
Orange.args = {
  colorScheme: 'orange',
};
