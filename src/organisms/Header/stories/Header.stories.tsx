import React from 'react';
import { Meta } from '@storybook/react';
import Header from '../Header';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta;

const Template = (args: any) => <Header {...args} />;

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
