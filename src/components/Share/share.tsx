import React, { FC } from 'react';
import styled from 'styled-components';
import ShareFB from './share-fb';
import SharePinterest from './share-pinterest';
import ShareTwitter from './share-twitter';

interface ShareProps {
  description?: string;
  media?: string;
  title: string;
  url: string;
  slug?: string;
}

const ShareContainer = styled.section`
  display: flex;
  align-items: center;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding-top: 2px;
`;

const Share: FC<ShareProps> = ({ description, media, title, url }) => {
  return (
    <ShareContainer>
      {description && title && url && (
        <>
          <SharePinterest description={description} media={media} url={url} />
          <ShareFB url={url} />
          <ShareTwitter title={title} url={url} />
        </>
      )}
    </ShareContainer>
  );
};

export default Share;
