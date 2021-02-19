import React from 'react';
import { Meta } from '@storybook/react';
import MobileMenu from '../MobileMenu';

export default {
  title: 'Organisms/MobileMenu',
  component: MobileMenu,
} as Meta;

export const Default = () => <MobileMenu isVisible />;
