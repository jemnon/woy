import { FixedObject } from 'gatsby-image';

interface Instagram {
  id: string;
  media_type: string;
  localImage: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
  permalink: string;
}

export default Instagram;
