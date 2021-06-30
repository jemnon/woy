import CommentsType from '../types/comments';

const sortComments = (comments: CommentsType[]) => {
  return comments.sort((a, b) => b.timestamp - a.timestamp);
};

interface RatingsReturnType {
  ratingsAvg: number;
  ratingsTotal: number;
}

const getRatings = (comments: CommentsType[]): RatingsReturnType => {
  const mappedComments = comments
    .filter(comment => comment.rating && comment.rating !== 0)
    .map(comment => comment.rating);
  const sum = mappedComments.reduce((acc, val) => {
    if (acc && val) return acc + val;
  });
  const ratingsTotal = mappedComments.length;
  const avg = sum ? sum / ratingsTotal : 0;
  const ratingsAvg = Number(avg.toFixed(2));
  return {
    ratingsAvg,
    ratingsTotal,
  };
};

interface CommentsReturnType {
  list: CommentsType[];
  ratingsAvg: number;
  ratingsTotal: number;
}

const getComments = async (id?: string): Promise<CommentsReturnType> => {
  const resp = await fetch(`/.netlify/functions/comments?id=${id}`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'GET',
  });
  const payload = await resp.json();
  if (resp.status > 399 && payload.message && payload.status) {
    const error: { message: string; status: string } = {
      message: payload.message,
      status: payload.status,
    };
    throw error;
  }
  return {
    list: sortComments(payload.comments),
    ...getRatings(payload.comments),
  };
};

export const postComment = async (body: CommentsType): Promise<void> => {
  const resp = await fetch(`/.netlify/functions/postComment`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'same-origin',
    },
    method: 'POST',
    body: JSON.stringify(body),
  });
  return resp.json();
};

export default getComments;
