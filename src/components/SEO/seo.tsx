/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  description: string;
  lang?: string;
  meta?: any;
  title: string;
}

const assetPath = withPrefix('/');

const isDomUsable = () => {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
};

const SEO: FC<SEOProps> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: `asian recipes, recipes, asian, women of color, woy, whisper of yum, cooking, cocktails, noods, rice, los angeles, chicken, beef, pork, wine, la, blog, food`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content:
            'https://res.cloudinary.com/dd8c1nipl/image/upload/v1586838879/woy/twitter-image.jpg',
        },
      ].concat(meta || [])}
    >
      {isDomUsable() && (
        <link
          rel="canonical"
          href={`${location.protocol}//${location.host}${location.pathname}`}
        />
      )}
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,400i,700|Noto+Serif+TC"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;
