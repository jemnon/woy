import React from 'react';
import { Meta } from '@storybook/react';
import Carousel from '../Carousel';

export default {
  title: 'Organisms/Carousel',
  component: Carousel,
} as Meta;

export const Default = () => (
  <Carousel carouselWidth="600px">
    <img src="https://images.ctfassets.net/lz7g6u6kccw7/N8HsjByBin9QQdgTBtFzG/9d22db5f44586484855efc6ddfccc9a6/IMG_2373-2.jpg?w=600&q=80" />
    <img src="https://images.ctfassets.net/lz7g6u6kccw7/379Yrik0wymvcd7HpPNYXZ/e2cfdb27c5bb5d117ec359b4919995b7/IMG_1834.jpg?w=600&q=80" />
    <img src="https://images.ctfassets.net/lz7g6u6kccw7/6ye623A48vnKG1pciqIgPx/eca3d0f81a80830e97553ff80acf9c95/Taho_square.jpg?w=600&q=80" />
    <img src="https://images.ctfassets.net/lz7g6u6kccw7/5mrrnE7DQKY3EYm9tps0Ab/b69bb54f0105e2e1e1bc36a45084f4a6/76F1D634-F8AC-4E9B-AEB7-906BCD6A3518.jpg?w=600&q=80" />
  </Carousel>
);
