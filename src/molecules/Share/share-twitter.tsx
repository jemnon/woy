import React, { FC } from 'react';
import Button from './button-styled';
import { Twitter } from '../../atoms/Icons';

interface ShareTwitterProps {
  url: string;
  title: string;
}

const ShareTwitter: FC<ShareTwitterProps> = ({ title, url }) => {
  const hashTags = 'whisperofyum';
  const params =
    `menubar=no,` +
    `toolbar=no,` +
    `resizable=yes,` +
    `scrollbars=yes,` +
    `height=600,` +
    `width=600`;
  const handleClick = (): void => {
    window.open(
      `https://twitter.com/intent/tweet?text=${title}&url=${url}&hashtags=${hashTags}`,
      '',
      params,
    );
  };
  return (
    <Button onClick={handleClick}>
      <Twitter />
    </Button>
  );
};

export default ShareTwitter;
