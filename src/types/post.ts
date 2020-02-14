export interface Categories {
  name: string;
}

export interface Images {
  fluid: {
    aspectRatio: number;
    sizes: string;
    src: string;
    srcSet: string;
    srcSetWebp: string;
    srcWebp: string;
  };
}

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
