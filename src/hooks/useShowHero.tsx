import { useEffect, useState } from 'react';

interface Location {
  state: {
    page?: number;
  };
}

const useShowHero = (location: Location): boolean => {
  const [showHero, setShowHero] = useState<boolean>(false);
  useEffect(() => {
    if (location?.state?.page) {
      setShowHero(false);
    }
    if (!location?.state?.page) {
      setShowHero(true);
    }
  }, [location.state]);
  return showHero;
};

export default useShowHero;
