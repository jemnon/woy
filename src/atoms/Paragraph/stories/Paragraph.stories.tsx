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

const Template = (args: any) => (
  <>
    <Paragraph {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius
      tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.
      Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet
      augue accumsan tincidunt.
    </Paragraph>
    <Paragraph {...args}>
      Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis
      libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum
      et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec
      nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt
      egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.
    </Paragraph>
  </>
);
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  fontStyle: 'normal',
  fontWeight: 'normal',
};

export const Italic = () => (
  <>
    <Paragraph fontStyle="italic">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius
      tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.
      Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet
      augue accumsan tincidunt.
    </Paragraph>
  </>
);
export const Bold = () => (
  <Paragraph fontWeight="bold">
    Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in
    faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in
    ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus
    tincidunt sit amet sed orci.
  </Paragraph>
);
