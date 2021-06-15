interface Comments {
  email?: string;
  id?: string;
  name?: string;
  message?: string;
  postId?: string;
  rating?: number;
  replies?: Comments[];
  replyId?: string;
  timestamp: number;
}

export default Comments;
