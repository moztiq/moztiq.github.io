import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface ISeoProps {
  title: string;
}

const SEO_QUERY = graphql`
  query SeoData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default function Seo({ title }: ISeoProps) {
  const data = useStaticQuery(SEO_QUERY);

  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
