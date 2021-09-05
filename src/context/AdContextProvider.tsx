import React, {
  createContext,
  FC,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import useScript from '../hooks/useScript';

interface AdContextValue {
  isLoaded: boolean;
}

const AdContext = createContext<AdContextValue>({
  isLoaded: false,
});

export const useAdContext = (): AdContextValue => {
  const adContextValue = useContext(AdContext);
  return adContextValue;
};

const AdContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const ad1Status = useScript(
    'https://ads.blogherads.com/static/blogherads.js',
  );
  const ad2Status = useScript(
    'https://ads.blogherads.com/sk/12/123/1235555/28585/header.js',
  );
  useEffect(() => {
    if (ad1Status === 'ready' && ad2Status === 'ready') setIsLoaded(true);
  }, [ad1Status, ad2Status]);
  const contextValue = {
    isLoaded,
  };
  return (
    <AdContext.Provider value={contextValue}>{children}</AdContext.Provider>
  );
};

export default AdContextProvider;
