import { Post as Posts } from './post';

export interface Categories {
  name: string;
  posts?: Posts[];
}
