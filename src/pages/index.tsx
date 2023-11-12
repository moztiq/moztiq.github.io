import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query BlogQuery {
    allContentfulMoztiqBlog {
      nodes {
        id
        title
        slug
        content {
          raw
        }
        headerImage {
          url
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(query);
  return <div>Coming Soon</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
