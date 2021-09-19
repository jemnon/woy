import { useEffect } from 'react';
import isDomUsable from '../utils/utils';

interface AdOptions {
  key?: string;
  size: string;
  id: string;
}

const useAd = ({ key, size, id }: AdOptions): void => {
  const slotId = isDomUsable() ? blogherads?.getSlotById(id) : null;
  useEffect(() => {
    if (isDomUsable() && slotId) {
      blogherads?.destroySlots([slotId]);
    }
  }, [key]);
  useEffect(() => {
    if (!slotId) {
      blogherads?.adq?.push([size, id]);
    }
  }, [key, slotId]);
};

export default useAd;
