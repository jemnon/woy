import React from 'react';
import { Meta } from '@storybook/react';
import Hero from '../Hero-ass';

export default {
  title: 'Organisms/Hero',
  component: Hero,
} as Meta;

const Template = (args: any) => (
  <Hero
    {...args}
    image={
      <img src="https://images.ctfassets.net/lz7g6u6kccw7/2r3UwmhRf4BxtkdOGVvMqF/8b04d0913a12a6cf80d775f4f9e8ea3d/Coco_lime_shrimp.JPG?w=1440&q=50" />
    }
  />
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  title: 'Coconut Shrimp',
};
