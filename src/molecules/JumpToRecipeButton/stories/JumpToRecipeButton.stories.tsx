import React from 'react';
import { Meta } from '@storybook/react';
import JumpToRecipeButton from '../JumpToRecipeButton';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/JumpToRecipeButton',
  component: JumpToRecipeButton,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <JumpToRecipeButton {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
