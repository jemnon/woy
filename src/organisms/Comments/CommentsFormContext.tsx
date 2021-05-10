import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

export interface CommentsFormContextValue {
  email: string;
  message: string;
  name: string;
  rating?: number;
  resetFormState?: () => void;
  setEmailVal: (email: string) => void;
  setMessageVal: (message: string) => void;
  setNameVal: (name: string) => void;
  setRatingVal: (rating: number) => void;
}

export const CommentsFormContext = createContext<CommentsFormContextValue>({
  email: '',
  message: '',
  name: '',
  rating: 0,
  resetFormState: () => {},
  setEmailVal: () => {},
  setMessageVal: () => {},
  setNameVal: () => {},
  setRatingVal: () => {},
});

export const useCommentsFormContext = (): CommentsFormContextValue => {
  const context = useContext(CommentsFormContext);
  return context;
};

interface CommentsFormContextProviderProps {
  children: ReactNode;
}

const CommentsFormContextProvider: FC<CommentsFormContextProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const setNameVal = (val: string): void => {
    setName(val);
  };
  const setMessageVal = (val: string): void => {
    setMessage(val);
  };
  const setEmailVal = (val: string): void => {
    setEmail(val);
  };
  const setRatingVal = (val: number): void => {
    setRating(val);
  };
  const resetFormState = (): void => {
    setEmail('');
    setName('');
    setMessage('');
  };
  const contextValue: CommentsFormContextValue = {
    email,
    message,
    name,
    rating,
    resetFormState,
    setNameVal,
    setMessageVal,
    setEmailVal,
    setRatingVal,
  };
  return (
    <CommentsFormContext.Provider value={contextValue}>
      {children}
    </CommentsFormContext.Provider>
  );
};

export default CommentsFormContextProvider;
