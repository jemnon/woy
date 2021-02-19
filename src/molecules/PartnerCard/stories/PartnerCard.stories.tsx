import React from 'react';
import { Meta } from '@storybook/react';
import PartnerCard from '../PartnerCard';

export default {
  title: 'Molecules/PartnerCard',
  component: PartnerCard,
} as Meta;

const Template = (args: any) => (
  <div style={{ width: '380px' }}>
    <PartnerCard
      {...args}
      image={
        <img src="https://images.ctfassets.net/lz7g6u6kccw7/zCb6zrDAGM6reKlsC8fFS/29ced01e5eae3ebb2784349478b7cfd1/Partner3.JPG?w=764&q=50" />
      }
    />
  </div>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  code: 'WHISPEROFYUM',
  description: 'Get 10% off your purchase with code',
  title: 'Primal Kitchen',
  url: '/some-url',
};
