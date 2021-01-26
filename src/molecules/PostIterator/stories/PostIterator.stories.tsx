import React from 'react';
import { Meta } from '@storybook/react';
import PostIterator from '../PostIterator';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/PostIterator',
  component: PostIterator,
} as Meta;

export const Default = () => (
  <PostIterator
    next={{
      image: (
        <img src="//images.ctfassets.net/lz7g6u6kccw7/7vS9kZpfYwLQrcMr7ROF6m/ccbe38f8a1be5f724c42c718875fa7ff/Thai_basil_final_.jpg?w=80&q=50" />
      ),
      name: 'Thai Basil Chicken',
      slug: 'thai-basil-chicken',
    }}
    prev={{
      image: (
        <img src="https://images.ctfassets.net/lz7g6u6kccw7/6mVskt5h3LkquklD3KZnV/d7fc8802558ba4b47d93fc1686818c5c/Sunchoke2.jpg?w=80&q=50" />
      ),
      name: 'Jerusalem Artichoke Soup',
      slug: 'jerusalem-artichoke-soup',
    }}
    onClick={(): void => {}}
  />
);
