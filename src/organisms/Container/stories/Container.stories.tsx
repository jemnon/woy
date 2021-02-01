import React from 'react';
import { Meta } from '@storybook/react';
import Container from '../Container';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Organisms/Container',
  component: Container,
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
  <div style={{ width: '100%', height: '100vh', backgroundColor: '#f9f9f9' }}>
    <Container {...args}>Container</Container>
  </div>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
