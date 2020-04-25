export interface Images {
  fluid: {
    aspectRatio: number;
    sizes: string;
    src: string;
    srcSet: string;
    srcSetWebp: string;
    srcWebp: string;
  };
  fixed?: { base64?: string; src?: string };
}
