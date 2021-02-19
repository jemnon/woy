import React from 'react';
import { Meta } from '@storybook/react';
import Logo from '../Logo';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <Logo {...args} />;

export const Light = Template.bind({});
// @ts-ignore
Light.args = {
  colorTheme: 'light',
};

export const Dark = Template.bind({});
// @ts-ignore
Dark.args = {
  colorTheme: 'dark',
};
// @ts-ignore
Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
