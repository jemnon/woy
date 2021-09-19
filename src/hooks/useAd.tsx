import { useEffect } from 'react';
import isDomUsable from '../utils/utils';

interface AdOptions {
  key?: string;
  size: string;
  id: string;
}

const useAd = ({ key, size, id }: AdOptions): void => {
  useEffect(() => {
    if (isDomUsable() && blogherads) {
      const slotId = blogherads?.getSlotById(id);
      if (slotId) blogherads?.destroySlots([slotId]);
    }
  }, [key]);
  useEffect(() => {
    if (blogherads) {
      blogherads?.adq?.push([size, id]);
    }
  }, [key]);
};

export default useAd;
