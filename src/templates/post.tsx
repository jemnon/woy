import React, { FC } from 'react';
import { Post as PostType } from '../types/post';
import Container from '../components/container-styled';
import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import PostDetail from '../components/PostDetail';
import SEO from '../components/SEO';

interface PostPageProps {
  pageContext: {
    page: PostType;
  };
}

const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const PostPage: FC<PostPageProps> = ({ pageContext }) => {
  const { page: post } = pageContext || {};
  const [{ fixed }] = post.images || [];
  return (
    <Layout>
      <SEO
        description={`${post.bodyPreview?.bodyPreview}`}
        title={`${capitalize(post.title)} | Whisper of Yum`}
        slug={`/${post.slug}`}
        meta={[
          {
            name: `twitter:image`,
            content: `https:${fixed?.src}`,
          },
          {
            name: `og:image`,
            content: `https:${fixed?.src}`,
          },
        ]}
      />
      <Header isVisible={true}>
        <Nav />
      </Header>
      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <Container>
          <Breadcrumbs title={post.title} />
          {post && (
            <PostDetail
              categories={post.categories}
              publishDate={post.publishDate}
              images={post.images}
              title={post.title}
              bodyShort={post.bodyShort}
              body={post.body}
            />
          )}
        </Container>
      </div>
    </Layout>
  );
};

export default PostPage;
