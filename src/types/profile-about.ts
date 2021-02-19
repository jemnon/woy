import { FixedObject } from 'gatsby-image';

interface ProfileAbout {
  avatar: {
    fixed: FixedObject;
  };
  description: {
    childMarkdownRemark: {
      html: string;
    };
  };
  name: string;
}

export default ProfileAbout;
