/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import isDomUsable from '../../utils/utils';

interface SEOProps {
  ampEnabled?: boolean;
  description?: string;
  lang?: string;
  meta?: any;
  title?: string;
  pathname?: string;
  image?: string;
  script?: any;
  slug?: string;
  type?: string;
}

const SEO: FC<SEOProps> = ({
  ampEnabled,
  description,
  image,
  lang = 'en',
  meta,
  title,
  type,
  script,
  slug,
  pathname,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            author
            siteUrl
            webStoryUrl
          }
        }
      }
    `,
  );
  const metaImage = image ?? site.siteMetadata.image;
  const metaDescription = description ?? site.siteMetadata.description;
  const metaTime = isDomUsable() ? new Date().getTime() : '';
  const metaTitle = title ?? site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'url',
          content: `${site.siteMetadata.siteUrl}${pathname || ''}`,
        },
        {
          name: 'title',
          content: metaTitle,
        },
        {
          name: 'image',
          content: metaImage,
        },
        {
          property: `og:locale`,
          content: 'en_US',
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: image,
        },
        {
          property: `og:type`,
          content: type || 'website',
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${pathname || ''}`,
        },
        {
          property: `og:site_name`,
          content: 'Whisper of Yum',
        },
        {
          property: `og:time`,
          content: metaTime,
        },
        {
          name: 'p:domain_verify',
          content: 'e2f1349ea701f347a95c15bab1f0fc7a',
        },
        {
          name: 'pinterest-rich-pin',
          content: 'false',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `fb:app_id`,
          content: process.env.GATSBY_FB_APP_ID,
        },
      ].concat(meta || [])}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Noto+Serif+TC:wght@400;700&display=swap"
        rel="stylesheet"
      />
      {isDomUsable() && (
        <link
          rel="canonical"
          href={`${site.siteMetadata.siteUrl}${pathname || ''}`}
        />
      )}
      {ampEnabled && (
        <link
          rel="amphtml"
          href={`${site.siteMetadata.webStoryUrl}/amp/${slug}`}
        />
      )}
      {script && <script type="application/ld+json">{script}</script>}
    </Helmet>
  );
};

export default SEO;
