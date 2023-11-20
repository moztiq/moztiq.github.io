import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import PostList from '../../components/post/PostList';
import ContentContainer from '../../components/post/ContentContainer';
import Seo from '../../components/Seo';
import styled from 'styled-components';

const PostListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function BookPage({ data }: PageProps<Queries.BookListQuery>) {
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <Layout>
      <ContentContainer title="BOOK">
        <PostListContainer>
          <PostList posts={posts as any} />
        </PostListContainer>
      </ContentContainer>
    </Layout>
  );
}

export const query = graphql`
  query BookList {
    allContentfulMoztiqBlog(
      filter: { category: { eq: "book" } }
      sort: { createdAt: DESC }
    ) {
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
            excerpt
          }
        }
        tag
      }
    }
  }
`;

export const Head = () => {
  return (
    <Seo title={'BOOK SECTION'} description={'BOOK SECTION'} url={`/book`} />
  );
};
