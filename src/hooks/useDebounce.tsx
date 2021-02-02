import { useState, useEffect } from 'react';

const useDebounce = (value: string | number, delay = 500): string | number => {
  const [debouncedValue, setDebouncedValue] = useState<string | number>(value);
  useEffect(() => {
    const handler = setTimeout((): void => {
      setDebouncedValue(value);
    }, delay);
    return (): void => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
