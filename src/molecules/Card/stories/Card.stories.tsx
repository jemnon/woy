import React from 'react';
import { Meta } from '@storybook/react';
import Grid from '../../../organisms/Grid';
import Card from '../Card';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/Card',
  component: Card,
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
  <div style={{ maxWidth: '320px' }}>
    <Card
      {...args}
      image={
        <img src="https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&q=50" />
      }
    />
  </div>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  publishDate: '2021-01-20T00:00-08:00',
  title: 'Filipino Pork Adobo',
};
