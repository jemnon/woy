import { useEffect, useState } from 'react';

export const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

function useIntersectionObserver(options = defaultOptions, target) {
  const [hasIntersected, setHasIntersection] = useState(false);
  useEffect(
    () => {
      if (!target || !options) return;
      const { current } = target || {};
      const handleIntersect = entries => {
        const [{ isIntersecting }] = entries || {};
        if (isIntersecting && !hasIntersected) {
          setHasIntersection(true);
        }
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(current);
      return () => {
        observer.unobserve(current);
      };
    },
    [hasIntersected, options, target],
  );
  return [hasIntersected];
}

export default useIntersectionObserver;
