import { Categories } from './categories';
import { Images } from './images';

export interface Post {
  slug: string;
  publishDate: string;
  id: string;
  categories: Categories[];
  title: string;
  images: Images[];
  body?: {
    body?: string;
  };
  bodyShort?: {
    bodyShort?: string;
  };
}
