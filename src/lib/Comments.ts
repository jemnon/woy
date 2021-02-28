import CommentsType from '../types/comments';

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
  return payload.comments;
};

export default getComments;
