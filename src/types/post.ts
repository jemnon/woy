import { Element } from 'hast';
import { Categories } from './categories';
import { Images } from './images';

export interface Post {
  slug?: string;
  id?: string;
  publishDate?: string;
  categories?: Categories[];
  title: string;
  images: Images[];
  body?: {
    childMarkdownRemark?: {
      html: string;
      htmlAst?: Element;
    };
  };
  bodyPreview?: {
    bodyPreview?: string;
    childMarkdownRemark?: {
      html: string;
      htmlAst?: Element;
    };
  };
  bodyShort?: {
    bodyShort?: string;
    childMarkdownRemark?: {
      html: string;
    };
  };
}
