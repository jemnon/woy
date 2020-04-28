import React, { FC } from 'react';
import Button from './button-styled';
import Twitter from '../../images/svg/icons/twitter.svg';

interface ShareTwitterProps {
  url?: string;
  image?: string;
}

const ShareTwitter: FC<ShareTwitterProps> = ({ url, image }) => {
  return (
    <Button>
      <Twitter />
    </Button>
  );
};

export default ShareTwitter;
