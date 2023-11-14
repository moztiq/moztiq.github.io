import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';

const query = graphql`
  {
    allContentfulMoztiqBlog(filter: { category: { eq: "book" } }) {
      nodes {
        id
        title
        slug
        category
        releaseDate
        headerImage {
          url
        }
        contents {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

const BookPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(query);
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <Layout>
      <ContentContainer title="BOOK">
        <PostList posts={posts} />
      </ContentContainer>
    </Layout>
  );
};

export default BookPage;

export const Head = () => <Seo title="Book" />;
