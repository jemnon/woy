import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

import MobileMenu from '../organisms/MobileMenu';

interface MobileMenuContextValue {
  open: () => void;
  close: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextValue>({
  open: () => {},
  close: () => {},
});

export const useMobileMenuContext = (): MobileMenuContextValue => {
  const mobileMenuContext = useContext(MobileMenuContext);
  return mobileMenuContext;
};

interface MobileMenuContextProviderProps {
  children: ReactNode;
}

const MobileMenuContextProvider: FC<MobileMenuContextProviderProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const open = (): void => {
    setIsVisible(true);
  };
  const close = (): void => {
    setIsVisible(false);
  };
  const contextValue = {
    close,
    open,
  };
  return (
    <MobileMenuContext.Provider value={contextValue}>
      {children}
      <MobileMenu isVisible={isVisible} />
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContextProvider;
