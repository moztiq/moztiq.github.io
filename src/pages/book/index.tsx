import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import PostListTopTitle from '../../components/PostListTopTitle';
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
