import React from 'react';
import { Meta } from '@storybook/react';
import Grid from '../Grid';
import GridCell from '../GridCell';

const disableProp = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Organisms/Grid',
  component: Grid,
  argTypes: {
    as: { ...disableProp },
    ref: { ...disableProp },
    theme: { ...disableProp },
    forwardedAs: {
      ...disableProp,
    },
  },
} as Meta;

export const Default = () => (
  <Grid columns={12} minRowHeight="1rem">
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      1 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      2 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      3 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      4 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      5 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      6 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      7 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      8 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      9 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      10 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      11 / 12
    </GridCell>
    <GridCell width={1} borderWidth="1px" padding=".5rem" textAlign="center">
      12 / 12
    </GridCell>

    <GridCell width={2} borderWidth="1px" padding=".5rem" textAlign="center">
      1 / 6
    </GridCell>
    <GridCell width={2} borderWidth="1px" padding=".5rem" textAlign="center">
      2 / 6
    </GridCell>
    <GridCell width={2} borderWidth="1px" padding=".5rem" textAlign="center">
      3 / 6
    </GridCell>
    <GridCell width={2} borderWidth="1px" padding=".5rem" textAlign="center">
      4 / 6
    </GridCell>
    <GridCell width={2} borderWidth="1px" padding=".5rem" textAlign="center">
      5 / 6
    </GridCell>
    <GridCell width={2} borderWidth="1px" padding=".5rem" textAlign="center">
      6 / 6
    </GridCell>

    <GridCell width={4} borderWidth="1px" padding=".5rem" textAlign="center">
      1 / 3
    </GridCell>
    <GridCell width={4} borderWidth="1px" padding=".5rem" textAlign="center">
      2 / 3
    </GridCell>
    <GridCell width={4} borderWidth="1px" padding=".5rem" textAlign="center">
      3 / 3
    </GridCell>

    <GridCell width={6} borderWidth="1px" padding=".5rem" textAlign="center">
      1 / 2
    </GridCell>
    <GridCell width={6} borderWidth="1px" padding=".5rem" textAlign="center">
      2 / 2
    </GridCell>

    <GridCell width={12} borderWidth="1px" padding=".5rem" textAlign="center">
      1 / 1
    </GridCell>
  </Grid>
);

export const Responsive = () => (
  <Grid columns="repeat(auto-fit,minmax(120px,1fr))">
    <GridCell borderWidth="1px" padding=".5rem" textAlign="center">
      1
    </GridCell>
    <GridCell borderWidth="1px" padding=".5rem" textAlign="center">
      2
    </GridCell>
    <GridCell borderWidth="1px" padding=".5rem" textAlign="center">
      3
    </GridCell>
  </Grid>
);
