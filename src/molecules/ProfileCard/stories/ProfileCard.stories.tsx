import React from 'react';
import { Meta } from '@storybook/react';
import Grid from '../../../organisms/Grid';
import ProfileCard from '../ProfileCard';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/ProfileCard',
  component: ProfileCard,
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
  <div style={{ width: '414px' }}>
    <ProfileCard
      {...args}
      description={
        <div>
          <p>
            I get down on making all sorts of eats, especially Filipino dishes
            from my childhood, oh–and soup (regardless of the season). A lot of
            what I know about cooking I learned from my momma, and as this blog
            grows, you'll see a lot of that goodness shared here.
          </p>
        </div>
      }
      image="https://images.ctfassets.net/lz7g6u6kccw7/2PXqIKP4gcdBKWQ4sUuqaa/c4ea960704b036c285cd6061400c447e/IMG_6D21ECE4038E-1.jpeg?h=250"
    />
  </div>
);

export const Default = Template.bind({});
