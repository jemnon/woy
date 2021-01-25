import React from 'react';
import { Meta } from '@storybook/react';
import RecipeMeta from '../RecipeMeta';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/RecipeMeta',
  component: RecipeMeta,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <RecipeMeta {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  cookTime: '10 minutes',
  servings: '8 ounces',
};
