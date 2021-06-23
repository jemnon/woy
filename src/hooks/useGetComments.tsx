import { useState, useEffect } from 'react';
import getComments from '../lib/Comments';
import CommentsType from '../types/comments';

interface CommentsState {
  comments?: CommentsType[];
  error: string | null;
  isFetching: boolean;
  ratingsAvg: number | null;
  ratingsTotal: number | null;
}

const useGetComments = (commentId?: string, postId?: string): CommentsState => {
  const [comments, setComments] = useState<CommentsType[] | undefined>(
    undefined,
  );
  const [ratingsAvg, setRatingsAvg] = useState<number | null>(null);
  const [ratingsTotal, setRatingsTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  useEffect(() => {
    const fetchComments = async (): Promise<void> => {
      setIsFetching(true);
      try {
        const resp = await getComments(postId);
        setComments(resp.list);
        setRatingsAvg(resp.ratingsAvg);
        setRatingsTotal(resp.ratingsTotal);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        setError(error);
      }
    };
    fetchComments();
  }, [commentId, postId]);
  return {
    comments,
    error,
    isFetching,
    ratingsAvg,
    ratingsTotal,
  };
};
export default useGetComments;
