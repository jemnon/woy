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
  return (
    <Layout>
      <SEO
        description="Whipser of Yum Post page"
        title={post.title}
        meta={[
          {
            name: 'Whipser of Yum',
            content: 'home',
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
