import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

export interface CommentsFormContextValue {
  setFormData: () => void;
}

export const CommentsFormContext = createContext<CommentsFormContextValue>({
  setFormData: () => {},
});

export const useCommentsFormContext = (): CommentsFormContextValue => {
  const commentsFormContext = useContext(CommentsFormContext);
  return commentsFormContext;
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
  const [rating, setRating] = useState<number | undefined>(undefined);
  const setFormData = () => {};
  const contextValue = {
    setFormData,
  };
  return (
    <CommentsFormContext.Provider value={contextValue}>
      {children}
    </CommentsFormContext.Provider>
  );
};

export default CommentsFormContextProvider;
