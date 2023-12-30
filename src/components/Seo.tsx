import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface ISeoProps {
  title: string;
  description: string;
  imageUrl?: string;
  url: string;
}

const SEO_QUERY = graphql`
  query SeoData {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;

export default function Seo({ title, description, imageUrl, url }: ISeoProps) {
  const data = useStaticQuery(SEO_QUERY);
  const customTitle = `${title} | ${data.site?.siteMetadata?.title}`;
  const banner =
    'https://images.ctfassets.net/vpyfljks33op/7120ZPNKnAmi4JE3lF5V4A/bbc4d0dae3509f6be6d7d51b360048ce/DALL_E_2023-12-16_11.14.08_-_An_illustration_inspired_by_the_poem_-_______________.-_The_scene_depicts_a_serene_and_nostalgi.png';

  return (
    <>
      <title>{customTitle}</title>
      <meta name="title" content={customTitle} />
      <meta name="description" content={description} />
      {/*<meta name="keyword" content="" />*/}
      <meta property="article:author" content="moztiq" />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={`${data.site?.siteMetadata.siteUrl}${url}`}
      />
      <meta property="og:site_name" content={customTitle} />
      <meta name="og:article:author" content="moztiq" />
      <meta property="og:title" content={customTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl || banner} />
      <meta name="twitter:title" content={customTitle} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl || banner} />
    </>
  );
}
