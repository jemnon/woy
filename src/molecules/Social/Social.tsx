import React, { FC } from 'react';
import styled from 'styled-components';
import Grid, { GridCell } from '../../organisms/Grid';
import Link from '../../atoms/Link';
import { Facebook, Instagram, Pinterest } from '../../atoms/Icons';
import { ColorMode } from '../../types/theme';

interface SocialProps {
  colorTheme?: ColorMode;
}

const SocialContainer = styled.section`
  max-width: 5.375rem;

  margin-left: auto;
  margin-right: auto;
`;

const Social: FC<SocialProps> = ({ colorTheme = 'dark' }) => (
  <SocialContainer>
    <Grid columns={3} gap="sm3">
      <GridCell width={1} middle>
        <Link
          to="https://www.instagram.com/whisperofyum/?hl=en"
          target="_blank"
        >
          <Instagram
            fill={colorTheme === 'dark' ? '#111' : '#fff'}
            fontSize="1.25rem"
          />
        </Link>
      </GridCell>
      <GridCell width={1}>
        <Link to="https://www.pinterest.com/whisperofyum/" target="_blank">
          <Pinterest
            fill={colorTheme === 'dark' ? '#111' : '#fff'}
            fontSize="1.25rem"
          />
        </Link>
      </GridCell>
      <GridCell width={1}>
        <Link to="https://www.facebook.com/whisperofyum" target="_blank">
          <Facebook
            fill={colorTheme === 'dark' ? '#111' : '#fff'}
            fontSize="1.25rem"
            style={{ maxWidth: '11px' }}
          />
        </Link>
      </GridCell>
    </Grid>
  </SocialContainer>
);

export default Social;
