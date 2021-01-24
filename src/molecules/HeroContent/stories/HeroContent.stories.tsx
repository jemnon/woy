import React from 'react';
import { Meta } from '@storybook/react';
import HeroContent from '../HeroContent';

export default {
  title: 'Molecules/HeroContent',
  component: HeroContent,
} as Meta;

const Template = (args: any) => <HeroContent {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  title: 'Coconut Shrimp',
};
// @ts-ignore
Default.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
