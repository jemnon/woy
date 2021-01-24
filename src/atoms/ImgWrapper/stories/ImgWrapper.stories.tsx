import React from 'react';
import { Meta } from '@storybook/react';
import Grid from '../../../organisms/Grid';
import ImgWrapper from '../ImgWrapper';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/ImgWrapper',
  component: ImgWrapper,
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
  <Grid columnWidth="400px">
    <ImgWrapper {...args}>
      <img src="https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&q=50" />
    </ImgWrapper>
  </Grid>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};

export const OneByOne = () => (
  <Grid columnWidth="200px">
    <ImgWrapper ratio={1 / 1}>
      <img src="https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&q=50" />
    </ImgWrapper>
  </Grid>
);

export const SixteenByNine = () => (
  <Grid columnWidth="320px">
    <ImgWrapper ratio={9 / 16}>
      <img src="https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&q=50" />
    </ImgWrapper>
  </Grid>
);
