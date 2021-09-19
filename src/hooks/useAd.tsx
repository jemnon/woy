import { useEffect, useState } from 'react';
import isDomUsable from '../utils/utils';

interface AdOptions {
  key?: string;
  size: string;
  id: string;
}

const useAd = ({ key, size, id }: AdOptions): void => {
  const slotId = blogherads?.getSlotById(id);
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
  /* useEffect(() => {
    if (isDomUsable()) {
      blogherads?.adq?.push([size, id]);
    }
  }, []); */
};

export default useAd;
