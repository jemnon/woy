import React from 'react';
import { Meta } from '@storybook/react';
// import Grid from '../../../organisms/Grid';
import Media from '../Media';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/Media',
  component: Media,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
  parameters: {
    backgrounds: {
      grid: {
        cellSize: 720,
        cellAmount: 1,
      },
    },
  },
} as Meta;

const Template = (args: any) => <Media {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  description: 'Lorem ipsum dolor sit amet',
  image: {
    fluid: {
      aspectRatio: 0.8,
      sizes: '(max-width: 800px) 100vw, 800px',
      src:
        'https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&h=1000&q=50&fm=webp',
      srcSet:
        'https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&h=1000&q=50&fm=webp',
      srcSetWebp:
        'https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&h=1000&q=50&fm=webp',
      srcWebp:
        'https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=800&h=1000&q=50&fm=webp',
    },
  },
  publishDate: '2021-01-20T00:00-08:00',
  title: 'Filipino Pork Adobo',
};
