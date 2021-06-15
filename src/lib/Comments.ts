import CommentsType from '../types/comments';

const sortComments = (comments: CommentsType[]) => {
  return comments.sort((a, b) => b.timestamp - a.timestamp);
};

const getComments = async (id?: string): Promise<CommentsType[]> => {
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
  return sortComments(payload.comments);
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
