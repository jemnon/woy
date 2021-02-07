import React from 'react';
import { Meta } from '@storybook/react';
import BreadCrumbs from '../BreadCrumbs';

export default {
  title: 'Molecules/BreadCrumbs',
  component: BreadCrumbs,
} as Meta;

export const Default = () => <BreadCrumbs title="Chicken Pot Pie" />;
