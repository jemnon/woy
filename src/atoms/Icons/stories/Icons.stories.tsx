import React from 'react';
import Grid from '../../../organisms/Grid';

// Icons
import DownArrow from '../DownArrow';
import DownArrowFilled from '../DownArrowFilled';
import DownArrowThick from '../DownArrowThick';
import Facebook from '../Facebook';
import Hamburger from '../Hamburger';
import Instagram from '../Instagram';
import LeftArrow from '../LeftArrow';
import Pinterest from '../Pinterest';
import RightArrow from '../RightArrow';
import Search from '../Search';
import TriangleDown from '../TriangleDown';
import TriangleUp from '../TriangleUp';
import Twitter from '../Twitter';
import UpArrow from '../UpArrow';
import X from '../X';

export default {
  title: 'Atoms/Icons',
};

export const Icons = () => (
  <Grid>
    <DownArrow />
    <DownArrowFilled />
    <DownArrowThick viewBox="0 0 36 20" />
    <Facebook />
    <Hamburger />
    <Instagram />
    <LeftArrow />
    <Pinterest />
    <RightArrow />
    <Search />
    <TriangleDown />
    <TriangleUp />
    <Twitter />
    <UpArrow />
    <X />
  </Grid>
);
