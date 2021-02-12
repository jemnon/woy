import React from 'react';
import { Meta } from '@storybook/react';
import VideoThumb from '../VideoThumb';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/VideoThumb',
  component: VideoThumb,
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
  <div style={{ width: '252px' }}>
    <VideoThumb
      {...args}
      image={
        <img src="https://images.ctfassets.net/lz7g6u6kccw7/6UirvdRJtVmSvDZ0jIBMTO/054fe6caf9245d1e580056fe5dcd565e/chili-oil.jpg?w=800&q=50" />
      }
    />
  </div>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
