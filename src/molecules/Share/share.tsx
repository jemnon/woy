import React, { FC } from 'react';
import styled from 'styled-components';
import Grid, { GridCell } from '../../organisms/Grid';
import ShareFB from './share-fb';
import SharePinterest from './share-pinterest';
import ShareTwitter from './share-twitter';

interface ShareProps {
  description?: string;
  label?: string;
  media?: string;
  title: string;
  url: string;
  slug?: string;
}

const ShareContainer = styled.section`
  display: inline-flex;
  align-self: flex-end;
`;

const ShareLabel = styled.div`
  margin-right: ${({ theme: { spacing } }): string => spacing.sm2};
`;

const Share: FC<ShareProps> = ({ description, label, media, title, url }) => {
  return (
    <ShareContainer>
      {label && <ShareLabel>{label}</ShareLabel>}
      {description && title && url && (
        <Grid columns={3} rowGap="sm1">
          <GridCell width={1} middle>
            <SharePinterest description={description} media={media} url={url} />
          </GridCell>
          <GridCell width={1} middle>
            <ShareFB url={url} />
          </GridCell>
          <GridCell width={1} middle>
            <ShareTwitter title={title} url={url} />
          </GridCell>
        </Grid>
      )}
    </ShareContainer>
  );
};

export default Share;
