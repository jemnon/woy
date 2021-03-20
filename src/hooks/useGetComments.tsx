import { useState, useEffect } from 'react';
import getComments from '../lib/Comments';
import CommentsType from '../types/comments';

interface CommentsState {
  comments?: CommentsType[];
  error: string | null;
  isFetching: boolean;
}

const useGetComments = (postId?: string): CommentsState => {
  const [comments, setComments] = useState<CommentsType[] | undefined>(
    undefined,
  );
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  useEffect(() => {
    const fetchComments = async (): Promise<void> => {
      setIsFetching(true);
      try {
        const resp = await getComments(postId);
        setComments(resp);
        setIsFetching(false);
        console.log(resp);
      } catch (error) {
        console.log('comment error: ', error);
        setIsFetching(false);
        setError(error);
      }
    };
    if (postId && !comments && !error) {
      fetchComments();
    }
  });
  return {
    comments,
    error,
    isFetching,
  };
};
export default useGetComments;
