import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

interface InstaUserNode {
  instaUserNode: {
    biography: string;
    profile_pic_url: string;
    profile_pic_url_hd: string;
  };
}

interface InstagramProps {
  data?: InstaUserNode;
}

const InstaBioLink = styled.a`
  display: flex;
  align-items: center;
`;

const InstaBioImg = styled.img`
  width: 200px;
  margin-right: 1rem;
`;

const Instagram: FC<InstagramProps> = () => {
  const data = useStaticQuery(graphql`
    query InstaBioQuery {
      instaUserNode {
        biography
        profile_pic_url
        profile_pic_url_hd
      }
    }
  `);
  return (
    <section id="instagram">
      <InstaBioLink
        href="https://www.instagram.com/whisperofyum"
        target="blank"
      >
        <InstaBioImg
          alt="https://www.instagram.com/whisperofyum"
          src={data.instaUserNode.profile_pic_url_hd}
        />
        <p>{data.instaUserNode.biography}</p>
      </InstaBioLink>
    </section>
  );
};

export default Instagram;
