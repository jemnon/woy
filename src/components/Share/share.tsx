import React, { FC } from 'react';
import styled from 'styled-components';
import ShareFB from './share-fb';
import ShareTwitter from './share-twitter';

interface ShareProps {
  image?: string;
  url?: string;
}

const ShareContainer = styled.section`
  display: flex;
  align-items: center;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
`;

const Share: FC<ShareProps> = ({ image, url }) => {
  return (
    <ShareContainer>
      <ShareFB url={url} />
      <ShareTwitter image={image} url={url} />
    </ShareContainer>
  );
};

export default Share;
