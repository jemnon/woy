import React from 'react';
import { Meta } from '@storybook/react';
import PlayButton from '../PlayButton';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/PlayButton',
  component: PlayButton,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <PlayButton {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
