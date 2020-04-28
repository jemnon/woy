import React, { FC, useEffect, useState } from 'react';
import isDomUsable from '../../utils';
import Button from './button-styled';
import Facebook from '../../images/svg/icons/facebook.svg';

declare global {
  interface Window {
    FB: any;
  }
}

interface ShareFBProps {
  description: string;
  url?: string;
  title: string;
}

interface FBErrorResponse {
  error_message?: string;
}

const getFacebookSDK = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (isDomUsable()) {
      return window?.FB ? resolve(true) : reject(false);
    }
  });
};

const ShareFB: FC<ShareFBProps> = ({ description, title, url }) => {
  const [isFacebookReady, setIsFacebookReady] = useState<boolean>(false);
  const handleClick = (): void => {
    window.FB.ui(
      {
        method: 'share_open_graph',
        action_type: 'og.shares',
        action_properties: JSON.stringify({
          object: {
            'og:url': url,
            'og:title': title,
            'og:description': description,
          },
        }),
      },
      (resp: FBErrorResponse) => {
        if (resp?.error_message) {
          console.error('There was an error sharing to FB.');
        }
      },
    );
  };
  useEffect(() => {
    if (!isFacebookReady) {
      getFacebookSDK().then(
        () => {
          setIsFacebookReady(true);
        },
        () => {
          setIsFacebookReady(false);
          console.error('There was an error loading the FB SDK.');
        },
      );
    }
  }, [isFacebookReady, setIsFacebookReady]);
  return (
    <>
      {isFacebookReady && (
        <Button onClick={handleClick}>
          <Facebook />
        </Button>
      )}
    </>
  );
};

export default ShareFB;
