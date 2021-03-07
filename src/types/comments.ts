interface Comments {
  email?: string;
  id?: string;
  name?: string;
  message?: string;
  rating?: number;
  replies?: Comments[];
  timestamp?: number;
}

export default Comments;
