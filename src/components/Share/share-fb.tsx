import React, { FC } from 'react';
import isDomUsable from '../../utils';
import Button from './button-styled';
import Facebook from '../../images/svg/icons/facebook.svg';

declare global {
  interface Window {
    FB: any;
  }
}

interface ShareFBProps {
  image: string;
  url?: string;
}

interface FBErrorResponse {
  error_message?: string;
}

const getFacebookSDK = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (isDomUsable()) {
      return window.FB ? resolve(true) : reject(false);
    }
  });
};

const ShareFB: FC<ShareFBProps> = ({ image, url }) => {
  const handleClick = (): void => {
    getFacebookSDK().then(
      (isLoaded: boolean) => {
        if (isLoaded) {
          window.FB.ui(
            {
              method: 'share',
              picture: image,
              href: url,
            },
            (resp: FBErrorResponse) => {
              if (resp.error_message) {
                console.error('There was an error sharing to FB.');
              }
            },
          );
        }
      },
      () => {
        console.error('There was an error loading the FB SDK.');
      },
    );
  };
  return (
    <Button onClick={handleClick}>
      <Facebook />
    </Button>
  );
};

export default ShareFB;
