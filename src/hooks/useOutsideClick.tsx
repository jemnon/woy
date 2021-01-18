import { useEffect } from 'react';

const useOutsideClick = (
  element: HTMLElement,
  callback: (event: MouseEvent) => void,
): void | undefined => {
  useEffect(() => {
    const handleListener = (event: MouseEvent): void => {
      if (!element || element.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };
    document.addEventListener('mousedown', handleListener);
    document.addEventListener('touchstart', handleListener);
    return (): void => {
      document.removeEventListener('mousedown', handleListener);
      document.removeEventListener('touchstart', handleListener);
    };
  }, [element, callback]);
};

export default useOutsideClick;
