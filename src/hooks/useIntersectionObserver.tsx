import { useEffect, useState } from 'react';

interface DefaultOptions {
  root: null;
  rootMargin: string;
  threshold: number;
}

interface Entry {
  isIntersecting: boolean;
}

interface Target {
  // using any for, ReactElement was throwing
  // Type 'string' is not assignable to type 'Element'
  // and couldn't find the appropriate type for this.
  current: any;
}

const defaultOptions: DefaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

function useIntersectionObserver(
  target: Target,
  options = defaultOptions,
): Array<boolean> {
  const [hasIntersected, setHasIntersection] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    if (!target.current) return;
    const { current } = target;
    const handleIntersect = (entries: Array<Entry>): void => {
      const [{ isIntersecting }] = entries || {};
      setIsIntersecting(isIntersecting);
      if (isIntersecting && !hasIntersected) {
        setHasIntersection(true);
      }
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(current);
    // eslint-disable-next-line consistent-return
    return (): void => {
      observer.unobserve(current);
    };
  }, [hasIntersected, options, target]);
  return [hasIntersected, isIntersecting];
}

export default useIntersectionObserver;
