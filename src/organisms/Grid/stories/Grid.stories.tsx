import React from 'react';
import { Meta } from '@storybook/react';
import Grid from '../Grid';

const disableProp = {
  table: {
    disable: true,
  },
};

const GridObj = {
  title: 'Molecules/Grid',
  component: Grid,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

export default GridObj;

const Template = args => <Grid {...args}>1 Column</Grid>;

export const OneColumn = Template.bind({});
OneColumn.args = {
  columns: 1,
};
