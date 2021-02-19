import { useEffect, useState } from 'react';
import useWindowResize from './useWindowResize';
import Breakpoint from '../types/breakpoint';

const useBreakpoint = (): Breakpoint | null => {
  const initialWidth = typeof window !== `undefined` ? window.innerWidth : 0;
  const [width, setWidth] = useState<number>(initialWidth);
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(null);
  const handleResize = (width?: number | string): void => {
    if (typeof width === 'number') setWidth(width);
  };
  useWindowResize(handleResize);
  useEffect(() => {
    if (width >= 960) {
      setBreakpoint('desktop');
    }
    if (width >= 640 && width <= 959) {
      setBreakpoint('tablet');
    }
    if (width >= 0 && width <= 639) {
      setBreakpoint('mobile');
    }
  }, [width]);
  return breakpoint;
};

export default useBreakpoint;
