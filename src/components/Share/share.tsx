import React, { FC } from 'react';
import styled from 'styled-components';
import ShareFB from './share-fb';
import ShareTwitter from './share-twitter';

interface ShareProps {
  title: string;
  url: string;
  image: string;
}

const ShareContainer = styled.section`
  display: flex;
  align-items: center;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
  padding-top: 2px;
`;

const Share: FC<ShareProps> = ({ image, title, url }) => {
  return (
    <ShareContainer>
      <ShareFB image={image} url={url} />
      <ShareTwitter title={title} url={url} />
    </ShareContainer>
  );
};

export default Share;
