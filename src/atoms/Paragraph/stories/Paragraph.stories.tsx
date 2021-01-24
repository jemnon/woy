import React from 'react';
import Paragraph from '../Paragraph';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
};

const Template = (args: any) => <Paragraph>Paragraph</Paragraph>;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  fontStyle: 'normal',
  fontWeight: 'normal',
};

export const Italic = () => (
  <Paragraph fontStyle="italic">Paragraph Italic</Paragraph>
);
export const Bold = () => (
  <Paragraph fontWeight="bold">Paragraph Bold</Paragraph>
);
