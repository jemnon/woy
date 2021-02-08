import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const useWindowWidth = (onResize: (width: number | string) => void): void => {
  const initialWidth = typeof window !== `undefined` ? window.innerWidth : 0;
  const [width, setWidth] = useState<number>(initialWidth);
  const debouncedWidth = useDebounce(width);
  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (debouncedWidth) {
      onResize(debouncedWidth);
    }
  }, [debouncedWidth]);
};

export default useWindowWidth;
