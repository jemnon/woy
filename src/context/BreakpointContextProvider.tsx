import React, { FC, ReactNode, useContext } from 'react';
import useBreakpoint from '../hooks/useBreakpoint';
import Breakpoint from '../types/breakpoint';

interface BreakpointContextValue {
  name: Breakpoint | null;
}

const BreakpointContext = React.createContext<BreakpointContextValue>({
  name: null,
});

export const useBreakpointContext = (): BreakpointContextValue => {
  const breakpointContext = useContext(BreakpointContext);
  return breakpointContext;
};

interface BreakpointContextProviderProps {
  children: ReactNode;
}

const BreakpointContextProvider: FC<BreakpointContextProviderProps> = ({
  children,
}) => {
  const breakpoint = useBreakpoint();
  const contextValue: BreakpointContextValue = {
    name: breakpoint,
  };
  return (
    <BreakpointContext.Provider value={contextValue}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointContextProvider;
