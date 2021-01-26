import React from 'react';
import { Meta } from '@storybook/react';
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
  <div style={{ width: '400px' }}>
    <ImgWrapper {...args}>
      <img src="https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&q=50" />
    </ImgWrapper>
  </div>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};

export const OneByOne = () => (
  <div style={{ width: '200px' }}>
    <ImgWrapper ratio={1 / 1}>
      <img src="https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&q=50" />
    </ImgWrapper>
  </div>
);

export const SixteenByNine = () => (
  <div style={{ width: '320px' }}>
    <ImgWrapper ratio={9 / 16}>
      <img src="https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&q=50" />
    </ImgWrapper>
  </div>
);
