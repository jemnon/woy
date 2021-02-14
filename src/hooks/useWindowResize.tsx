import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const useWindowResize = (
  onResize: (width?: number | string, height?: number | string) => void,
): void => {
  const initialWidth = typeof window !== `undefined` ? window.innerWidth : 0;
  const initialHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const [width, setWidth] = useState<number>(initialWidth);
  const [height, setHeight] = useState<number>(initialHeight);
  const debouncedWidth = useDebounce(width);
  const debounceHeight = useDebounce(height);
  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (debouncedWidth && debounceHeight) {
      onResize(debouncedWidth, debounceHeight);
    }
  }, [debouncedWidth, debounceHeight]);
};

export default useWindowResize;
