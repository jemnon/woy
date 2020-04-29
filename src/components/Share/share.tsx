import React, { FC } from 'react';
import styled from 'styled-components';
import ShareFB from './share-fb';
import ShareTwitter from './share-twitter';

interface ShareProps {
  description?: string;
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

const Share: FC<ShareProps> = ({ description, title, url }) => {
  return (
    <ShareContainer>
      {description && title && url && (
        <>
          <ShareFB url={url} />
          <ShareTwitter title={title} url={url} />
        </>
      )}
    </ShareContainer>
  );
};

export default Share;
