import React, { FC } from 'react';
import Img from 'gatsby-image';
import Hero from '../organisms/Hero';
import Layout from '../organisms/Layout';
import SEO from '../molecules/SEO';
import { Post as PostType } from '../types/post';

interface LatestPost {
  node?: PostType;
}

interface HomeProps {
  pageContext?: {
    page?: {
      latestPost?: LatestPost[];
    };
  };
}

const metaDesc =
  `Just like you (or not), I love food. So much so, ` +
  `my partner and I decided to create this repository of my go-to, ` +
  `flavor-bomb dishes, with simple-ish prep. I get down making all sorts ` +
  `of eats, especially Filipino dishes from my childhood. ` +
  `I keep it simple and straight to the point; brief-ish description, ingredients, and steps.` +
  `I figure, if it looks good and you feel so inclined to making it, ` +
  `I'll spare you the endless scrolling through the details of why I ` +
  `chose a specific ingredient over another and get straight to what ` +
  `you want. Enjoy the content.`;

const Home: FC<HomeProps> = ({ pageContext }) => {
  const [{ node }] = pageContext?.page?.latestPost || [];
  console.log(node);
  return (
    <Layout>
      <SEO
        description={metaDesc}
        image="https://res.cloudinary.com/dd8c1nipl/image/upload/c_scale,w_880/v1586932061/woy/pork-chop.jpg"
        title="Whisper of Yum | Recipes, Cooking and Los Angeles"
        type="website"
      />
      {node?.images && (
        <Hero
          title={node?.title}
          image={<Img alt={node?.title} fluid={node?.images[0].fluid} />}
        />
      )}
    </Layout>
  );
};

export default Home;
