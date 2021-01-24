import React from 'react';
import Text from '../../Text';
import Grid, { GridCell } from '../../../organisms/Grid';
import { Icons } from '../';

export default {
  title: 'Atoms/Icons',
  component: Icons,
};

export const AllIcons = () => (
  <Grid columnWidth="130px">
    {Object.keys(Icons).map(name => {
      // @ts-ignore
      const Component = Icons[name];
      return (
        <GridCell>
          <Component />
          <Text fontSize="f-xsm">{name}</Text>
        </GridCell>
      );
    })}
  </Grid>
);
