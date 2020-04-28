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
import isDomUsable from '../../utils';

interface SEOProps {
  description: string;
  lang?: string;
  meta?: any;
  title?: string;
  pathname?: string;
  image: string;
}

const assetPath = withPrefix('/');

const SEO: FC<SEOProps> = ({
  description,
  image,
  lang,
  meta,
  title,
  pathname,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
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
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: `asian recipes, recipes, asian, women of color, woy, whisper of yum, whisperofyum, whisperofyum.com, cooking, cocktails, noods, rice, los angeles, chicken, beef, pork, wine, la, blog, food, farmer's market`,
        },
        {
          name: 'url',
          content: `${site.siteMetadata.siteUrl}${pathname || ''}`,
        },
        {
          name: 'title',
          content: title,
        },
        {
          name: 'image',
          content: image,
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
          name: `og:image`,
          content: image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${pathname || ''}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: image,
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
          property: `fb:app_id`,
          content: process.env.GATSBY_FB_APP_ID,
        },
      ].concat(meta || [])}
    >
      {isDomUsable() && (
        <link
          rel="canonical"
          href={`${site.siteMetadata.siteUrl}${pathname || ''}`}
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
