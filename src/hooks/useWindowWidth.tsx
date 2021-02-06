import { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';
import useDebounce from './useDebounce';

const useWindowWidth = (onResize: (width: number | string) => void): void => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const location = useLocation();
  const debouncedWidth = useDebounce(width);
  useEffect(() => {
    const handleResize = (): void => {
      console.log('window resize');
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log('width: ', width);
  useEffect(() => {
    if (debouncedWidth) {
      onResize(debouncedWidth);
    }
  }, [debouncedWidth]);
};

export default useWindowWidth;
