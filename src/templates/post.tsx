import React, { FC } from 'react';
import { Post as PostType } from '../types/post';
import Container from '../components/container-styled';
import Breadcrumbs from '../components/Breadcrumbs';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import PostDetail from '../components/PostDetail';
import SEO from '../components/SEO';

interface PostPageProps {
  pageContext: {
    page: PostType;
  };
}

const PostPage: FC<PostPageProps> = ({ pageContext }) => {
  const { page: post } = pageContext || {};
  const [{ fixed }] = post.images;
  return (
    <Layout>
      <SEO
        description={`${post.bodyPreview?.bodyPreview}`}
        title={post.title}
        meta={[
          {
            property: 'og:image',
            content: fixed.base64,
          },
        ]}
      />
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
