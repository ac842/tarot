// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, url, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = url || site.siteMetadata.siteUrl;
  const metaImage = image || `${site.siteMetadata.siteUrl}/default-image.jpg`;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content="website" />

      {/* Telegram Mini App 支持的 Meta 標籤 */}
      <meta name="telegram:autoplay" content="true" />
      <meta name="telegram:theme-color" content="#663399" />
      <meta name="telegram:site" content={metaUrl} />
    </Helmet>
  );
};

export default SEO;