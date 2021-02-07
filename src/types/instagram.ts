import { FluidObject } from 'gatsby-image';

interface Instagram {
  id: string;
  media_type: string;
  localImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  permalink: string;
}

export default Instagram;
