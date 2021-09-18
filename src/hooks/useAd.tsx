import { useEffect } from 'react';
import isDomUsable from '../utils/utils';

const useAd = (key: string, size: string, id: string): void => {
  useEffect(() => {
    if (isDomUsable() && blogherads) {
      blogherads?.adq?.push([size, id]);
    }
  }, [key, size, id]);
};

export default useAd;
