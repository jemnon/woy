import React from 'react';
import Button from '../Button';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
};

const Template = (args: any) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  colorScheme: 'orange',
  size: 'medium',
  shape: 'pill',
  variant: 'solid',
};

export const Sizes = () => (
  <>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
  </>
);

export const Shapes = () => (
  <>
    <Button shape="pill">Pill</Button>
    <Button shape="rectangle">Rectangle</Button>
  </>
);

export const Variant = () => (
  <>
    <Button size="small" variant="outline">
      Outline
    </Button>
    <Button size="medium" variant="outline">
      Outline
    </Button>
  </>
);
