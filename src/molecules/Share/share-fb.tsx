import React, { FC } from 'react';
import Button from './button-styled';
import { Facebook } from '../../atoms/Icons';

interface ShareFBProps {
  url: string;
}

const ShareFB: FC<ShareFBProps> = ({ url }) => {
  const params =
    `menubar=no,` +
    `toolbar=no,` +
    `resizable=yes,` +
    `scrollbars=yes,` +
    `height=626,` +
    `width=600`;
  const handleClick = (): void => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '',
      params,
    );
  };

  return (
    <Button onClick={handleClick}>
      <Facebook />
    </Button>
  );
};

export default ShareFB;
