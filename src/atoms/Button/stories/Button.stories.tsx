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

const Template = args => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
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
    <Button shape="pill">Small</Button>
    <Button shape="rectangle">Medium</Button>
  </>
);

export const Variant = () => (
  <>
    <Button size="small" variant="outline">
      Small
    </Button>
    <Button size="medium" variant="outline">
      Medium
    </Button>
  </>
);
