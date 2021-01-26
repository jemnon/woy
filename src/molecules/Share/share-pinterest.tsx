import React, { FC } from 'react';
import Button from './button-styled';
import { Pinterest } from '../../atoms/Icons';

interface SharePinterestProps {
  description: string;
  media?: string;
  url: string;
}

const SharePinterest: FC<SharePinterestProps> = ({
  description,
  media,
  url,
}) => {
  const mediaParam = media ? `&media=${media}` : '';
  const params =
    `menubar=no,` +
    `toolbar=no,` +
    `resizable=yes,` +
    `scrollbars=yes,` +
    `height=600,` +
    `width=600`;
  const handleClick = (): void => {
    window.open(
      `http://pinterest.com/pin/create/button/?url=${url}&description=${description}${mediaParam}`,
      '',
      params,
    );
  };
  return (
    <Button onClick={handleClick}>
      <Pinterest />
    </Button>
  );
};

export default SharePinterest;
