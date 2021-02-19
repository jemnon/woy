import React from 'react';
import { Meta } from '@storybook/react';
import Avatar from '../Avatar';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => (
  <Avatar
    {...args}
    src="https://images.ctfassets.net/lz7g6u6kccw7/2PXqIKP4gcdBKWQ4sUuqaa/c4ea960704b036c285cd6061400c447e/IMG_6D21ECE4038E-1.jpeg?h=250"
  />
);
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  display: 'inline-block',
  bottomSpacing: 'md1',
};
