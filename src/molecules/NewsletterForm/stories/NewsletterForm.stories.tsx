import React from 'react';
import { Meta } from '@storybook/react';
import NewsletterForm from '../NewsletterForm';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Molecules/NewsletterForm',
  component: NewsletterForm,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

const Template = (args: any) => <NewsletterForm {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
