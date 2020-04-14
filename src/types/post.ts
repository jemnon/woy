import { Categories } from './categories';
import { Images } from './images';

export interface Post {
  slug?: string;
  id?: string;
  publishDate: string;
  categories?: Categories[];
  title: string;
  images: Images[];
  body?: {
    childMarkdownRemark?: {
      html: string;
    };
  };
  bodyPreview?: {
    bodyPreview?: string;
    childMarkdownRemark?: {
      html: string;
    };
  };
  bodyShort?: {
    bodyShort?: string;
    childMarkdownRemark?: {
      html: string;
    };
  };
}
