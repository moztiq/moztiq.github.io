import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';

export default function BookPage({ data }: PageProps<Queries.BookListQuery>) {
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <Layout>
      <ContentContainer title="BOOK">
        <PostList posts={posts} />
      </ContentContainer>
    </Layout>
  );
}

export const BOOKLIST_QUERY = graphql`
  query BookList {
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

export const Head = () => <Seo title="Book" />;
