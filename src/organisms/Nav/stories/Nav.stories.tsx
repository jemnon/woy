import React from 'react';
import { Meta } from '@storybook/react';
import Nav from '../Nav';

export default {
  title: 'Organisms/Nav',
  component: Nav,
} as Meta;

const Template = (args: any) => <Nav {...args} />;

export const Light = Template.bind({});
// @ts-ignore
Light.args = {
  colorTheme: 'light',
  pathname: '/',
};

export const Dark = Template.bind({});
// @ts-ignore
Dark.args = {
  colorTheme: 'dark',
  pathname: '/',
};
// @ts-ignore
Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
