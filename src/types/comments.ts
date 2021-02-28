interface Comments {
  id?: string;
  name?: string;
  handle?: string;
  message?: string;
  rating?: number;
  replies?: Comments[];
  timestamp?: number;
}

export default Comments;
